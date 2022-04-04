var numUniqueEmails = function (emails) {
    return emails.reduce((set, email) => {
        let [first, second] = email.split('@');
        first = first.split('.').join('');
        const plusIdx = first.split('').findIndex(item => item === '+');
        if (plusIdx !== -1) {
            first = first.substring(0, plusIdx);
        }
        set.add(`${first}@${second}`);
        return set;
    }, new Set()).size;
};