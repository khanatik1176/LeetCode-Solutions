var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    let a = str1.length;
    let b = str2.length;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;

    }

    return str1.substring(0, a);
};

console.log(gcdOfStrings("ABABAB","ABAB"));