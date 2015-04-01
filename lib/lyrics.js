'use strict';

/**
 * Module dependencies.
 */

let fs = require('fs');
let join = require('path').join;

/**
 * Generate a random number between a `min` and a `max`, inclusive.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */

let randomBetween = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Test if a file has .json file extension.
 */

let rIsJSON = /\.json$/i;

/**
 * Lyric registry.
 */

let registry = fs
  .readdirSync(join(__dirname, './lyrics'))
  .reduce(function(registry, filename) {
    if (rIsJSON.test(filename)) {
      registry[filename.replace(rIsJSON, '')] = require(join(__dirname, `lyrics/${filename}`));
    }
    return registry;
  }, Object.create(null));

/**
 * Cache a list of all rapper names. We use this to grab random rapper names.
 */

let names = Object.keys(registry);

/**
 * Get a random lyric from the registry
 *
 * @param {string} name The name of the rapper.
 * @return {null|string} A quote.
 */

let getRandomLyric = function(name) {
  if (!name) {
    name = names[randomBetween(0, names.length - 1)];
  }

  let rapper = registry[name];

  if (!rapper) {
    return null;
  }

  return registry[name][randomBetween(0, rapper.length - 1)];
};

/**
 * Exports.
 */

module.exports = getRandomLyric;
