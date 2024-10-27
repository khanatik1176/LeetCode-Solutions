var romanToInt = function(s) {

    const symbolvalues = {
         "I":1,
        "V": 5,
        "X":10,
         "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    
        let counter = 0;
        let sub = 0;
    
        for(let i = 0; i<s.length; i++)
        {
            
            if(symbolvalues[s[i]] < symbolvalues[s[i+1]])
            {
                sub += symbolvalues[s[i+1]] - symbolvalues[s[i]];    
                 i++;

            }

            else
            {
                counter = counter+symbolvalues[s[i]];
            }
            
        }
    
        return counter+sub;
    
         
        
    };

    // console.log(romanToInt("II"));
    console.log(romanToInt("MCMXCIV"));