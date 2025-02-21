var majorityElement = function(nums) {

    const majorityHash = {};

    for(let i=0; i<nums.length; i++)
    {
       majorityHash[nums[i]] =0;
    }
    
    for(let j =0; j<nums.length; j++)
    {
        if(majorityHash.hasOwnProperty(nums[j]))
        {
            majorityHash[nums[j]]++;
        }
        
    }
         const maxFreq = Math.max(...Object.values(majorityHash));

            for(i in majorityHash)
            {
                if(majorityHash[i] === maxFreq)
                {
                    return parseInt(i);
                }

            }
            
        

};


console.log(majorityElement([3,2,3]));