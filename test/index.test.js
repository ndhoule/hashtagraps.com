'use strict';

let app = require('../lib/app');
let assert = require('assert');
let http = require('http');
let supertest = require('supertest');

let assertText = function(res) {
  assert(res.text.length);
};

describe('hashtagraps', function() {
  let server;
  let request;

  beforeEach(function() {
    server = http.createServer(app.callback()).listen();
    request = supertest.agent(server);
  });

  afterEach(function(done) {
    server.close(done);
  });

  describe('nonexistent url', function() {
    it('should send 404', function(done) {
      request
        .get('/nonexistent')
        .expect(404, done);
    });
  });

  describe('/random', function() {
    it('should send a lyric', function(done) {
      request
        .get('/random')
        .expect('Content-Type', /text/)
        .expect(assertText)
        .expect(200, done);
    });
  });

  describe('/:name', function() {
    it('should send a lyric', function(done) {
      request
        .get('/drake')
        .expect('Content-Type', /text/)
        .expect(assertText)
        .expect(200, done);
    });
  });
});
