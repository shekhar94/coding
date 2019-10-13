const logger = require('./Logger');
const Shopper = require('./Shopper');

logger.log('Starting app...');

const shopper = new Shopper('shekhar', 200);

console.log(`total: ${logger.count}`);