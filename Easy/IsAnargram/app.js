var isAnagram = function(s, t) {
  
    if(s.length != t.length)
    {
        return false;
    }

    let AnarHash = {};
    let char = "";

    for(let i =0; i<s.length; i++)
    {
         char = s[i];
        
        AnarHash[char] = 0;
    }

    for(let j =0; j<s.length; j++)
    {
        if(AnarHash.hasOwnProperty(s[j]))
        {
            AnarHash[s[j]]++;
        }
    }

    for(let k =0; k<t.length; k++)
        {
            if(AnarHash.hasOwnProperty(t[k]))
            {
                AnarHash[t[k]]--;
            }
        }

        for(let i in AnarHash)
        {
            if(AnarHash[i] !== 0)
            {
                return false;
            }
            
        }

        return true;


};

console.log(isAnagram("rac","car"));