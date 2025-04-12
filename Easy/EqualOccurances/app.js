var areOccurrencesEqual = function(s) {
    let hashmap = {};
    for(let i =0; i<s.length; i++)
    {
        hashmap[s[i]] = 0; 

    }

    for(let j =0; j<s.length; j++)
    {
        if(hashmap.hasOwnProperty(s[j]))
        {
            hashmap[s[j]]++
        }
    }

    const values = Object.values(hashmap);
    const allEqual = values.every((val => val === values[0]))
    return allEqual;
};


console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));