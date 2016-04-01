'use strict';

const Request = require('supertest');
const Assert = require('chai').assert;
const app = require('../app');

describe('POST /process/route', () => {
  it('should process the route', (done) => {
    Request(app)
      .post('/process/route', { ruta: 'pan', ramal: 'prin' })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
    });
});
