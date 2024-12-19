const phoneBook = [
    { name: '1984', phone: '+3806628' },
    { name: 'zxglebrsd', phone: '+3803141' },
    { name: 'Nagibator', phone: '+3809098' }
];

const findPhoneByName = (name) => {
    for (const entry of phoneBook) {
        if (entry.name === name) {
            return entry.phone;
        }
    }
    return 'Phone number not found';
};

console.log(findPhoneByName('1984'))
console.log(findPhoneByName('zxglebrsd'));
console.log(findPhoneByName('Nagibator'));
