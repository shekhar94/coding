var licenseKeyFormatting = function (s, k) {
    const str = s.split('-').join('').toUpperCase();
    const len = str.length;
    const iteration = Math.floor(len / k);
    const remainder = len % k;
    let ans = str.slice(0, remainder);

    for (let i = 0; i < iteration; i++) {
        const offset = remainder + i * k;
        ans = ans + (ans ? '-' : '') + str.substring(offset, offset + k);
    }

    return ans;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));

