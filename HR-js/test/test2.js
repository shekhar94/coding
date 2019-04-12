function compute_distinct_homonyms(secret_mapping, word_list) {
    let distinct_map = {};
    for (let i = 0; i < word_list.length; i++) {
        let mappedWord = getMappedWord(word_list[i], secret_mapping);
        if (!distinct_map[mappedWord]) distinct_map[mappedWord] = true;
    }
    return Object.keys(distinct_map);
}

function getMappedWord(word, secret_mapping) {
    let char_arr = word.split('');
    let mappedWord = '';
    let map = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }
    for (let i = 0; i < char_arr.length; i++) {
        mappedWord = mappedWord.concat(secret_mapping[map(char_arr[i])]);
    }
    return mappedWord;
}

main() {
    console.log(compute_distinct_homonyms());
}