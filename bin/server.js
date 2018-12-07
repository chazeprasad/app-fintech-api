"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const path = require("path");
const appication_1 = require("./app/appication");
const context_1 = require("./app/util/context");
require("./config/app.config");
const ROOT_DIR = path.join(__dirname, '..');
const STATIC_DIR = ROOT_DIR + '/public';
let app = new appication_1.Application();
app.rootDir = ROOT_DIR;
app.staticDir = STATIC_DIR;
app.init();
const server = http.createServer(app.express);
exports.server = server;
server.on('error', onError);
server.on('listening', onListening);
server.listen(app.port);
// process.on('SIGTERM', function () {
//     process.exit(0);
// });
app.express.use((req, res, next) => {
    req.context = new context_1.Context();
});
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof app.port === 'string') ? 'Pipe ' + app.port : 'Port ' + app.port;
    console.log('bind');
    console.log(bind);
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            console.log(error);
            throw error;
    }
}
function onListening() {
    //    debug('server')
    let addr = server.address();
    addr.address = addr.address == '::' ? '127.0.0.1' : addr.address;
    // let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    app.log(`server started on http://${addr.address}:${addr.port}; press Ctrl-C to terminate.'`); // eslint-disable-line no-console
    console.log(`server started on http://${addr.address}:${addr.port}; press Ctrl-C to terminate.'`); // eslint-disable-line no-console
    // debug(`Listening on ${bind}`);
}
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
