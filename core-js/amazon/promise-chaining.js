function getPromise(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`i: ${i}`);
            resolve(i)
        }, i * 100);
    });
}

function chaining() {
    const pArr = [];
    for (let i = 0; i < 9; i++) {
        pArr.push(getPromise(i));
    }
    let p = pArr[0];
    for (let i = 1; i < 9; i++) {
        p.then((data) => {
            // console.log(data);
            p = pArr[i];
        });
    }
}


chaining();