'use strict';

/**
 * Module dependencies.
 */

let getRandomLyric = require('./lyrics');
let koa = require('koa');
let route = require('koa-route');

/**
 * App instance.
 */

let app = koa();

/**
 * Routes.
 */

app.use(route.get('/:name', function*(name) {
  let lyric = getRandomLyric(name === 'random' ? null : name);

  if (!lyric) {
    this.status = 404;
    return;
  }

  this.status = 200;
  this.type = 'text';
  this.body = lyric;
}));

/**
 * Exports.
 */

module.exports = app;
