const xml = require('./test-data').data;
const parseString = require('xml2js').parseString;
const fs = require('fs');

parseString(xml, function (err, result) {
    if (err) {
        throw new Error('Error in xml parsing');
    } else {
        const lat_lng_arr = [];
        for (let i = 1; i < result.gpx.trk[0].trkseg[0].trkpt.length; i++) {
            const lat_lon = result.gpx.trk[0].trkseg[0].trkpt[i - 1].$;
            lat_lng_arr.push({ lat: lat_lon.lat, lng: lat_lon.lon });
        }
        fs.writeFileSync('./lat-lng.js', `
        module.exports = ${JSON.stringify(lat_lng_arr)}
        `);
    }
});