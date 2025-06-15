var findWordsContaining = function(words, x) {
  
    let indices = [];

    for(let i =0; i<words.length; i++)
    {
        if(words[i].includes(x))
        {
            indices.push(i);
        }
    }

    return indices;
    
};

console.log(findWordsContaining(["leet","code"], "e"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"));