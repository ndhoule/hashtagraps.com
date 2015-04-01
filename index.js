'use strict';

/**
 * Module dependencies.
 */

let app = require('./lib/app');

/**
 * Port.
 */

const PORT = Number.parseInt(process.env.PORT || 8080, 10);

/**
 * Start app.
 */

app.listen(PORT);
