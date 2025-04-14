var numOfStrings = function(patterns, word) {

    let counter = 0;
    for(let i =0; i<patterns.length; i++)
    {
        if(word.includes(patterns[i]))
        {
            counter++;
        }
    }
    return counter;
    
};


console.log(numOfStrings(["a","abc", "bc","d"],"abc"))