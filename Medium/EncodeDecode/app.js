function encode(strs) {
    return strs.join('#,');
}

function decode(s) {
    console.log(s.split('#,'));
    return s.length === 0 ? s : s.split('#,');
}


console.log(decode(encode(["neet","code","love","you"])));
console.log(decode(encode(["we","say",":","yes"])));
console.log(decode(encode([""])));