var lengthOfLastWord = function(s) {

    let splited = s.trim().split(" ");
    console.log(splited);
    let lastString = splited[splited.length-1];
    console.log(lastString)
    
    return lastString.length;
};


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("  fly me   to the moon "))