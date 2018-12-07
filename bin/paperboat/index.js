"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const logger = require("morgan");
const compress = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const helmet = require("helmet");
const multer = require("multer");
const mongoose = require("mongoose"); //import mongoose
const expressWinston = require("express-winston");
const expressValidation = require("express-validation");
const error_1 = require("./core/error");
const core_1 = require("./core");
class PaperBoat extends core_1.Paper {
    constructor() {
        super();
        this.staticDir = 'PATH';
        this.rootDir = 'PATH';
        process.env.NODE_ENV = process.env.NODE_ENV || 'development';
        this.port = this.normalizePort(process.env.PORT || 8080);
        this.express = express();
        // this.init();
    }
    init() {
        this.configureMiddleware();
        this.configErrorHandling();
    }
    configureMiddleware() {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        if (process.env.NODE_ENV === 'development') {
            this.express.use(logger('dev'));
        }
        // secure apps by setting various HTTP headers
        this.express.use(helmet());
        // enable CORS - Cross Origin Resource Sharing
        const corsOptions = {
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 200
        };
        // this.express.options('*', cors(corsOptions))
        this.express.use(cors(corsOptions));
        this.initFileUpload();
        this.initMongoose();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: true
        }));
        this.express.use(cookieParser());
        this.express.use(compress());
        this.express.use(methodOverride());
        // enable detailed API logging in dev env
        if (process.env.NODE_ENV === 'development') {
            expressWinston.requestWhitelist.push('body');
            expressWinston.responseWhitelist.push('body');
        }
        // Public directory
        this.express.use(express.static(this.staticDir));
    }
    initFileUpload() {
        var DIR = this.rootDir + '/public/file/';
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, DIR);
            },
            filename: function (req, file, cb) {
                // cb(null, file.fieldname + '-' + Date.now())
                let ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
                cb(null, file.fieldname + '-' + Date.now() + ext);
            }
        });
        var upload = multer({ storage: storage });
        this.express.post('/api/upload/file', (req, res, next) => {
            // req.file is the `avatar` file
            // req.body will hold the text fields, if there were any
            upload.single('file')(req, res, (err) => {
                if (err) {
                    next(err);
                }
                res.json({ filename: req.file.filename });
            });
        });
        this.express.post('/api/upload/files', (req, res, next) => {
            // req.files is array of `photos` files
            // req.body will contain the text fields, if there were any
            console.log(req.file);
            upload.array('file', 100)(req, res, (err) => {
                if (err) {
                    next(err);
                }
                console.log(req.files);
                let fileList = req.files;
                let list = Array.from(fileList, (x) => {
                    return x.filename;
                });
                res.json({ files: list });
            });
        });
    }
    initMongoose() {
        const DB_URL = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/paperboat';
        //use q promises
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        //connect to mongoose
        mongoose.connect(DB_URL, { useNewUrlParser: true });
    }
    configErrorHandling() {
        // if error is not an instanceOf ApiError, convert it.
        this.express.use((err, req, res, next) => {
            // console.log('=====================');
            // console.log(err);
            // return;
            if (err instanceof expressValidation.ValidationError) {
                // validation error contains errors which is an array of error each containing message[]
                const unifiedErrorMessage = err.errors.map((error) => error.messages.join('. ')).join(' and ');
                const error = new error_1.ApiError(unifiedErrorMessage, err.status, true);
                return next(error);
            }
            else if (!(err instanceof error_1.ApiError)) {
                const apiError = new error_1.ApiError(err.message, err.status, err.isPublic);
                return next(apiError);
            }
            console.log('========');
            console.log(err);
            return next(err);
        });
        // console.log('========')
        // catch 404 and forward to error handler
        this.express.use((req, res, next) => {
            const err = new error_1.ApiError('API not found', httpStatus.NOT_FOUND);
            return next(err);
        });
        // log error in winston transports except when executing test suite
        /* const winstonInstance = new ((winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    json: true,
                    colorize: true
                })
            ]
        }); */
        /* if (process.env.NODE_ENV !== 'test') {
            this.express.use(expressWinston.errorLogger({
                winstonInstance
            }));
        } */
        // error handler, send stacktrace only during development
        this.express.use((err, req, res, next) => // eslint-disable-line no-unused-vars
         res.status(err.status).json({
            message: err.isPublic ? err.message : err.message,
            // message: err.isPublic ? err.message : httpStatus[err.status],
            stack: process.env.NODE_ENV === 'development' ? err.stack : {}
        }));
    }
    normalizePort(val) {
        let port = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port))
            return val;
        else if (port >= 0)
            return port;
        else
            return false;
    }
}
exports.PaperBoat = PaperBoat;
