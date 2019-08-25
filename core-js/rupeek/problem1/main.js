const xml = require('./test-data').data;
const parseString = require('xml2js').parseString;
const util = require('./util');

parseString(xml, function (err, result) {
    if (err) {
        throw new Error('Error in xml parsing');
    }
    // console.dir(result);
    let total_distance = 0; // in meters
    let total_time = 0; // in minutes
    let high = 0;
    let low = Infinity;
    let moving_time = 0;
    let max_speed = 0;
    for (let i = 1; i < result.gpx.trk[0].trkseg[0].trkpt.length; i++) {
        const lat_lon = result.gpx.trk[0].trkseg[0].trkpt[i - 1].$;
        const time = result.gpx.trk[0].trkseg[0].trkpt[i - 1].time[0];
        const ele = result.gpx.trk[0].trkseg[0].trkpt[i - 1].ele;
        const lat_lon1 = result.gpx.trk[0].trkseg[0].trkpt[i].$;
        const time1 = result.gpx.trk[0].trkseg[0].trkpt[i].time[0];
        const ele1 = result.gpx.trk[0].trkseg[0].trkpt[i].ele;
        const distance = util.distance(lat_lon.lat, lat_lon.lon, ele, lat_lon1.lat, lat_lon1.lon, ele1);
        total_distance += distance;
        const time_diff = util.calculateTime(time, time1);
        total_time += time_diff;
        if (Math.max(ele, ele1) > high) {
            high = Math.max(ele, ele1);
        }
        if (Math.min(ele, ele1) < low) {
            low = Math.min(ele, ele1);
        }
        if (distance > 0) {
            moving_time += time_diff;
        }
        if (distance / time_diff > max_speed) {
            max_speed = distance / time_diff;
        }
    }
    printResult(total_distance, max_speed, total_time, high, low, moving_time);
});

function printResult(total_distance, max_speed, total_time, high, low, moving_time) {
    console.log(`total_distance (in meters):: ${total_distance}`);
    console.log(`Max speed (meters/minute):: ${max_speed}`);
    console.log(`avg speed (meters/minute)::${total_distance / total_time}`);
    console.log(`Elevation gained (in meters):: ${high - low}`);
    console.log(`Moving time (in minutes):: ${moving_time}`);
    console.log(`Total time elapsed (in minutes):: ${total_time}`);
}