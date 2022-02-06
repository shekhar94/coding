// https://leetcode.com/problems/encode-and-decode-tinyurl/submissions/

function encode(id) {
    let map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const shortUrl = [];
    while (id) {
        shortUrl.push(map[id % 62]);
        id = Math.floor(id / 62);
    }
    return shortUrl.reverse().join('');
}

function decode(shortUrl) {
    let id = 0;
    for (let i = 0; i < shortUrl.length; i++) {
        const char = shortUrl.charAt(i);
        if ('a' <= char && char <= 'z') {
            id = id * 62 + (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        if ('A' <= char && char <= 'Z') {
            id = id * 62 + (char.charCodeAt(0) - 'A'.charCodeAt(0)) + 26
        }
        if ('0' <= char && char <= '9') {
            id = id * 62 + (char.charCodeAt(0) - '0'.charCodeAt(0)) + 52;
        }
    }
    return id;
}

function main() {
    const id = 12345;
    console.log(encode(12345));
    console.log(decode(encode(12345)));
}

main();

let counter = 32;
let db = new Map();

var encode = function (longUrl) {
    let id = counter;

    let map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const shortUrl = [];
    while (id) {
        shortUrl.push(map[id % 62]);
        id = Math.floor(id / 62);
    }
    const tinyUrl = shortUrl.reverse().join('');

    db.set(counter, longUrl);
    counter++;
    return tinyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    let id = 0;
    for (let i = 0; i < shortUrl.length; i++) {
        const char = shortUrl.charAt(i);
        if ('a' <= char && char <= 'z') {
            id = id * 62 + (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        if ('A' <= char && char <= 'Z') {
            id = id * 62 + (char.charCodeAt(0) - 'A'.charCodeAt(0)) + 26
        }
        if ('0' <= char && char <= '9') {
            id = id * 62 + (char.charCodeAt(0) - '0'.charCodeAt(0)) + 52;
        }
    }

    return db.get(id);
};


function main() {
    const long = "http://bell.example.com/base.html#animal";
    console.log(encode(long));

    const long1 = "https://example.com/alarm/beds.html?alarm=baseball&basketball=bat";
    console.log(encode(long1));
}

main();