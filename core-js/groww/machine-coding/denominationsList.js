const denominationsMap = new Map();
const supportedDenominations = new Map();

function addDenomination(id, value) {
    if (denominationsMap.has(id)) throw new Error('Duplicate denomination id');
    denominationsMap.set(id, value);
    supportedDenominations.set(value, true);
}


function removeDenomination(id) {
    if (!productMap.has(id)) throw new Error('Denomination with given id does not exists');
    denominationsMap.delete(id);
    supportedDenominations.delete(value);
}

function checkValidDenomination(value) {
    if (supportedDenominations.has(value)) {
        return value;
    }
    throw new Error('Invalid denomination');
}

function getDenominations() {
    return { denominationsMap, supportedDenominations };
}


module.exports = {
    addDenomination,
    removeDenomination,
    checkValidDenomination,
    getDenominations
}

