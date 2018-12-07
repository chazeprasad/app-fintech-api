import "jasmine";
var request = require('supertest')
import { server } from '../src/server'
var mongoose = require('mongoose')

// const server = app.server;

// console.log(app)


describe('Sample Test', () => {
    it('Should be true', () => {
        expect(true).toBe(true);
    })
    it('Should be false', () => {
        expect(false).toBe(false);
    })
})

describe('Dashboard', () => {
    let app = null;
    beforeAll( (done) => {
        done();
    })

    afterAll(done => {
        console.log('Deleting test database');
        // mongoose.connection.db.dropDatabase(done);
    })


    describe('Route Test', () => {
        it('Should return Welcome..!!', function (done) {
            console.log('---server')
            request(server).get('/').expect(200).end(function (err, res) {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            });
        })
    })
})

