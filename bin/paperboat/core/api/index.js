"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PREFIX = '$$route_';
const POLICY_PREFIX = '$$policy_';
const ACTION_PREFIX = '$$action_';
function destruct(args) {
    const hasPath = typeof args[0] === 'string';
    const path = hasPath ? args[0] : '';
    const middleware = hasPath ? args.slice(1) : args;
    // if (middleware.some(m => typeof m !== 'function')) {
    //     throw new Error('Middleware must be function')
    // }
    return [path, middleware];
}
function uniqEs6(arrArg) {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}
function route(method, ...args) {
    if (typeof method !== 'string') {
        throw new Error('The first argument must be an HTTP method');
    }
    const [path, middleware] = destruct(args);
    return function (target, name, descriptor) {
        target[`${PREFIX}${name}`] = {
            method,
            path,
            middleware
        };
    };
}
function Policy(...args) {
    const [path, middleware] = destruct(args);
    return function (target, name, descriptor) {
        console.log('name');
        console.log(name);
        if (name) {
            target.hasPolicy = true;
            target[`${POLICY_PREFIX}${name}`] = {
                middleware
            };
        }
        else {
            console.log('--- Policy ---');
            const proto = target.prototype;
            console.log('========================================');
            console.log(args);
            proto.policyList = {};
            Object.getOwnPropertyNames(proto)
                .filter(prop => prop.indexOf(PREFIX) === 0)
                .map(prop => {
                const fnName = prop.substring(PREFIX.length);
                let list = args.map(p => {
                    if (typeof p == 'function')
                        return p;
                    let policy = p.policy;
                    if (p.except) {
                        if (p.except.indexOf(fnName) === -1)
                            return p.use;
                        else
                            return false;
                    }
                    else if (p.only) {
                        if (p.only.indexOf(fnName) !== -1)
                            return p.use;
                        else
                            return false;
                    }
                }).filter(x => x);
                proto.policyList[fnName] = (list);
            });
            console.log('----------------');
            console.log(proto.policyList);
            proto.$routes = proto.$routes.map(x => {
                x.middleware = proto.policyList[x.fnName].concat(x.middleware);
                x.middleware = uniqEs6(x.middleware);
                return x;
            });
            console.log(proto.$routes);
        }
    };
}
exports.Policy = Policy;
function applyClassPolicy(args) {
    return function (target, name, descriptor) {
        const proto = target.prototype;
        proto.policyList = {};
        Object.getOwnPropertyNames(proto)
            .filter(prop => prop.indexOf(PREFIX) === 0)
            .map(prop => {
            const fnName = prop.substring(PREFIX.length);
            let list = args.map(p => {
                if (typeof p == 'function')
                    return p;
                let policy = p.policy;
                if (p.except) {
                    if (p.except.indexOf(fnName) === -1)
                        return p.use;
                    else
                        return false;
                }
                else if (p.only) {
                    if (p.only.indexOf(fnName) !== -1)
                        return p.use;
                    else
                        return false;
                }
            }).filter(x => x);
            proto.policyList[fnName] = (list);
        });
        proto.$routes = proto.$routes.map(x => {
            x.middleware = proto.policyList[x.fnName].concat(x.middleware);
            x.middleware = uniqEs6(x.middleware);
            return x;
        });
        // console.log(proto.$routes)
    };
}
function extractArgs(args) {
    let apiConfig;
    if (typeof args === 'string') {
        apiConfig = {};
        apiConfig.path = args;
        apiConfig.policy = [];
        apiConfig.middleware = [];
    }
    else if (typeof args === 'object') {
        apiConfig = {};
        apiConfig.path = args.path;
        if (args.policies) {
            // console.log('===================')
            // console.log(args.policies instanceof Array )
            // console.log('===================')
            if ((typeof args.policies == 'object') && (args.policies instanceof Array)) {
                apiConfig.policies = args.policies;
                apiConfig.policies.unshift((req, res, next) => {
                    req.context = {};
                    next();
                });
            }
            else {
                throw new Error('The argument (args.policies) must be an Array');
            }
        }
        else {
            apiConfig.policies = [];
        }
        if (args.middlewares) {
            // console.log('===================')
            // console.log(args.policies instanceof Array )
            // console.log('===================')
            if ((typeof args.middlewares == 'object') && (args.middlewares instanceof Array)) {
                apiConfig.middlewares = args.middlewares;
            }
            else {
                throw new Error('The argument (args.middlewares) must be an Array');
            }
        }
        else {
            apiConfig.middlewares = [];
        }
    }
    else {
        throw new Error('The argument must be String or Object');
    }
    return apiConfig;
}
// @controller(path: optional, ...middleware: optional)
function Api(args) {
    console.log('--- controller ---');
    let apiConfig = extractArgs(args);
    const ctrlPath = apiConfig.path;
    const ctrlMiddleware = apiConfig.middlewares;
    // const [ctrlPath, ctrlMiddleware] = extractArgs(args)
    return function (target) {
        const proto = target.prototype;
        console.log(Object.getOwnPropertyNames(proto));
        proto.$routes = Object.getOwnPropertyNames(proto)
            .filter(prop => prop.indexOf(PREFIX) === 0)
            .map(prop => {
            const { method, path, middleware: actionMiddleware } = proto[prop];
            const url = `${ctrlPath}${path}`;
            const fnName = prop.substring(PREFIX.length);
            const policyMiddleware = (proto[`${POLICY_PREFIX}${fnName}`]) ? proto[`${POLICY_PREFIX}${fnName}`].middleware : [];
            let middleware = ctrlMiddleware.concat(policyMiddleware, actionMiddleware);
            console.log('args.policies');
            console.log(args.policies);
            console.log(proto.$beforeActionList);
            let list = args.policies.map(p => {
                if (typeof p == 'function')
                    return p;
                if (p.except) {
                    if (p.except.indexOf(fnName) === -1)
                        return p.use;
                    else
                        return false;
                }
                else if (p.only) {
                    if (p.only.indexOf(fnName) !== -1)
                        return p.use;
                    else
                        return false;
                }
            }).filter(x => x);
            let actionList;
            if (proto.$beforeActionList) {
                actionList = proto.$beforeActionList.map(p => {
                    if (typeof p == 'function')
                        return p;
                    if (p.except) {
                        if (p.except.indexOf(fnName) === -1)
                            return p.use;
                        else
                            return false;
                    }
                    else if (p.only) {
                        if (p.only.indexOf(fnName) !== -1)
                            return p.use;
                        else
                            return false;
                    }
                }).filter(x => x);
            }
            console.log('--- API ---');
            console.log(list);
            console.log(actionList);
            console.log('--- --- ---');
            if (args.policies.length) {
                middleware = list.concat(middleware);
                middleware = uniqEs6(middleware);
            }
            // if (actionList) {
            //     middleware = middleware.concat(actionList);
            //     middleware = uniqEs6(middleware);
            // }
            let $beforeActionList = actionList;
            return {
                method: method === 'del' ? 'delete' : method,
                url,
                middleware,
                fnName
            };
        });
    };
}
exports.Api = Api;
function extractActionArgs(args) {
    let config;
    if (typeof args === 'string') {
        config = {};
        config.all = true;
        config.action = null;
    }
    else if (typeof args === 'object') {
        config = {};
        config.all = false;
        config.action = args;
    }
    else {
        throw new Error('The argument must be String or Object');
    }
    return config;
}
function BeforeAction(args) {
    const config = extractActionArgs(args);
    const ba = config.action;
    return function (target, name, descriptor) {
        const proto = target;
        // const fn = target[name];
        const fn = name;
        ba.use = fn;
        let baFn = config.all ? fn : ba;
        proto.$beforeActionList = proto.$beforeActionList || [];
        proto.$beforeActionList.push(baFn);
    };
}
exports.BeforeAction = BeforeAction;
let Head = route.bind(null, 'head');
exports.Head = Head;
let Options = route.bind(null, 'options');
exports.Options = Options;
let Get = route.bind(null, 'get');
exports.Get = Get;
let Post = route.bind(null, 'post');
exports.Post = Post;
let Put = route.bind(null, 'put');
exports.Put = Put;
let Patch = route.bind(null, 'patch');
exports.Patch = Patch;
let Delete = route.bind(null, 'delete');
exports.Delete = Delete;
let Del = route.bind(null, 'del');
exports.Del = Del;
let All = route.bind(null, 'all');
exports.All = All;
const express = require("express");
const __1 = require("..");
class ApiController extends __1.Paper {
    constructor() {
        super();
        this.$$beforeActionList = [];
        // Inside controller constructor
        this.router = express.Router();
        console.log('this.$routes');
        console.log(this.$routes);
        for (const { method, url, middleware, fnName, $beforeActionList } of this.$routes) {
            if (middleware.length) {
                this.router[method](url, ...middleware, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        if ($beforeActionList) {
                            for (let baFn of $beforeActionList) {
                                yield this[baFn](req, res, next);
                            }
                        }
                        this[fnName](req, res, next);
                    }
                    catch (error) {
                        next(error);
                    }
                }));
            }
            else {
                this.router[method](url, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        this[fnName](req, res, next);
                    }
                    catch (error) {
                        next(error);
                    }
                }));
            }
        }
    }
}
exports.ApiController = ApiController;
