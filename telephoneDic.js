function processData(input) {
    const inputArr = input.split('\n');
    const n = parseInt(inputArr[0], 10);
    const entries = inputArr.slice(1, n + 1);
    const queries = inputArr.slice(n + 1);

    if (n < 1 || n > 100000) {
        return;
    }

    if (queries.length < 1 || queries.length > 100000) {
        return;
    }

    // ["name phone", "name1 phone1", "name1 phone2"] => {name: "phone", name1: "phone1"}
    const phoneBook = entries.reduce((prevVal, curVal) => {
        const [name, phone] = curVal.split(' ');
        prevVal[name] = phone;
        return prevVal;
    }, {});

    queries.forEach(name => {
        const phoneNumber = phoneBook[name];

        if (phoneNumber) {
            console.log(`${name}=${phoneNumber}`);
        } else {
            console.log('Not found');
        }
    });
}