function ipToNumber(ip = '127.0.0.1') {
    return ip.split('.')
    .map(chr=>new Number(chr))
    .reduce((acc, octet, index) => {
            const shift = (3 - index) * 8;
            return acc + (octet << shift);
    }, 0);
}

console.log(ipToNumber('127.0.0.1'));
console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('192.168.1.10'));
console.log(ipToNumber('165.225.133.150'));
console.log(ipToNumber('0.0.0.0'));
console.log(ipToNumber('1.4.8.8'));
