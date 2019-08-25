function distance(lat1, lon1, ele1, lat2, lon2, ele2) {
    const x1 = ele1 * Math.cos(lat1) * Math.sin(lon1),
        y1 = ele1 * Math.sin(lat1),
        z1 = ele1 * Math.cos(lat1) * Math.cos(lon1),
        x2 = ele2 * Math.cos(lat2) * Math.sin(lon2),
        y2 = ele2 * Math.sin(lat2),
        z2 = ele2 * Math.cos(lat2) * Math.cos(lon2);
    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
    return dist;
}

function calculateTime(start, end) {
    // returns time taken in minutes
    return (new Date(end).getTime() / (1000 * 60) - new Date(start).getTime() / (1000 * 60))
}

module.exports = {
    distance,
    calculateTime
}