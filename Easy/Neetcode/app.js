const duplicateInteger = function(s)
{
    let nums = [];

    nums = s;
    
    let message = false;
    
    for(let i =0; i<nums.length; i++)
    {
        for(let j=1; j<nums.length; j++)
            {
                if(i!=j)
                {
                    if(nums[i] == nums[j])
                    {
                        message = true;
                    }
                }

            }   
        
    }

    return message;

} 

console.log(duplicateInteger([1,2,3,3]));
