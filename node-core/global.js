// Globals
console.log('shekhar');
global.console.log('shekhar'); // global is available like window object in browser
console.log(__dirname);
console.log(__filename);

var path = require('path');
console.log(path.basename(__filename));