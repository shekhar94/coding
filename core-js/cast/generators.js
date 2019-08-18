function* generatorFun(i) {
    yield i + 1;
    yield i + 2;
}

const generator = generatorFun(2);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());