function generatePrime(num) {
    let i = 2
    while (i <= num) {
        if (checkPrime(i)) {
            console.log(i);
        }
        i++;
    }
}

function checkPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const num = 10;
    generatePrime(num);
}

main();
