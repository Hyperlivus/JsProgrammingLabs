const phoneBook = [
    { name: '1984', phone: '+3806628' },
    { name: 'zxglebrsd', phone: '+3803141' },
    { name: 'Nagibator', phone: '+3809098' }
];

const findPhoneByName = (name) => {
    return phoneBook[name] ?? 'Phone number not found';
};

console.log(findPhoneByName('1984'))
console.log(findPhoneByName('zxglebrsd'));
console.log(findPhoneByName('Nagibator'));
