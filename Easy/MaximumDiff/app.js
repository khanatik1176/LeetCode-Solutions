var maximumDifference = function(nums) {

    let small = nums[0];
    let maxDiff = 0;

    for(let i =1; i<nums.length; i++)
    {
        
        if(nums[i]<small)
        {
            small = nums[i];
        }

        else
        {
            big = nums[i];

            if(big-small > maxDiff)
            {
                maxDiff = big-small;
            }

        }
    }
 if(maxDiff == 0)
    {
        return -1;
    }

    else
        {
            return maxDiff;
        }

};

console.log(maximumDifference([9,4,3,2]));