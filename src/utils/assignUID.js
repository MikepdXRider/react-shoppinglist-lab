const uidArr = []

function generateRanNum () {
    return Math.round(Math.random() * 10000);
}

export default function assignUID() {
    // assign random number to newNum variable.
    let newNum = generateRanNum();

    // while the newNum exists in the dictionary...
    while (uidArr.includes(newNum)) {
        // keep reassigning a random number to newNum..
        newNum = generateRanNum();
    }

    // place newNum in dictionary.
    uidArr.push(newNum);
    // return newNum.
    return newNum;
}



