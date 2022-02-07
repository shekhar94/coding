function findRepeatedDnaSequences(s) {
    const seqMap = new Map();
    const len = s.length;
    const set = new Set();

    for (let i = 0; i < len - 9; i++) {
        const dna = s.substring(i, i + 10);
        if (!seqMap.has(dna)) seqMap.set(dna, 1);
        else set.add(dna);
    }

    return [...set];
}

function main() {
    const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
    // const s = "AAAAAAAAAAAAA";
    // const s = "AAAAAAAAAAA";
    console.log(findRepeatedDnaSequences(s));
}

main();