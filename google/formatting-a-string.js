function main(input) {
    // Remove spaces
    let filteredString = input.split(' ').join('');
    // Remove dashes
    filteredString = filteredString.split('-').join('');
    const len = filteredString.length;
    let res = ''; // For storing final string
    let remainder = len % 3;
    let div = Math.floor(len / 3);

    let iteration = remainder === 1 ? div - 1 : div;
    for (let i = 0; i < iteration; i++) {
        const seg = filteredString.substring(i * 3, i * 3 + 3);
        if (res) res = `${res} ${seg}`;
        else res = `${seg}`;
    }
    if (remainder === 1) {
        const firstPart = filteredString.substring(len - 4, len - 2);
        const secondPart = filteredString.substring(len - 2, len);
        res = res ? `${res} ${firstPart} ${secondPart}` : `${firstPart} ${secondPart}`;
    } else if (remainder === 2) {
        const end = filteredString.substring(len - 2, len);
        res = res ? `${res} ${end}` : `${end}`;
    }
    return res;
}

console.log(main(" ab"));