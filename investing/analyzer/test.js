var API = require('indian-stock-exchange');

var NSEAPI = API.NSE;
var BSEAPI = API.BSE;

// explore https://kite.trade/startups
// Examples

NSEAPI.getIndices()
  .then(function (response) {
    console.log(response.data); //return the api data
  });

BSEAPI.getIndices()
  .then(function (response) {
    console.log(response.data); //return the api data
  });

NSEAPI.getQuoteInfo("TCS").then((res) => {
  console.log(res.data);
});
