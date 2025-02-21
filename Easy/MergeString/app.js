var mergeAlternately = function(word1, word2) {

    let merged = ""
    length = word1.length+word2.length;

    for(let i =0; i<length; i++)
    {
        if(i<word1.length)
        {
            merged += word1[i];
        }
        if(i<word2.length)
        {
            merged += word2[i];
        }
    }

    return merged;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab","pqrs"));