import { Request, Response, NextFunction } from 'express'

import * as http from 'http';
import * as debug from 'debug';
import * as path from 'path';
import { Application } from './app/appication';

import * as express from 'express';
import { IUser, IUserModel } from './app/model/user.model';
import { Context } from './app/util/context';

import './config/app.config'

declare global {
  namespace Express {
    interface Request {
      context: Context
    }
  }
}

const ROOT_DIR = path.join(__dirname, '..')
const STATIC_DIR = ROOT_DIR + '/public'

let app: Application = new Application();
app.rootDir = ROOT_DIR;
app.staticDir = STATIC_DIR;
app.init();

const server = http.createServer(app.express);
server.on('error', onError);
server.on('listening', onListening);
server.listen(app.port);

// process.on('SIGTERM', function () {
//     process.exit(0);
// });


app.express.use((req:Request, res:Response, next:NextFunction) => {
    req.context = new Context();
})

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
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
            console.log(error)
            throw error;
    }
}

function onListening(): void {
//    debug('server')
    let addr:any = server.address();
    addr.address = addr.address == '::' ? '127.0.0.1' : addr.address

    // let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    app.log(`server started on http://${addr.address}:${addr.port}; press Ctrl-C to terminate.'`); // eslint-disable-line no-console
    console.log(`server started on http://${addr.address}:${addr.port}; press Ctrl-C to terminate.'`); // eslint-disable-line no-console

    // debug(`Listening on ${bind}`);
}

function normalizePort(val: number | string): number | string | boolean {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}

export { server }





