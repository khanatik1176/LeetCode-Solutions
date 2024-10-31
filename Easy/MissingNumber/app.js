var missingNumber = function(nums) {

    let totalNumbers = nums.length;

    let countHashtable = {}

    for(let i=0; i<=totalNumbers; i++)
    {
        countHashtable[i] = 0;
    }

    console.log(countHashtable);

    for(let j=0; j<=totalNumbers; j++)
    {
        if(countHashtable.hasOwnProperty(nums[j]))
        {
            countHashtable[nums[j]]++;
        }
    }
 
    for(let keys in countHashtable)
    {
        if(countHashtable[keys] == 0)
        {
            let missingValue = keys;
            return parseInt(missingValue);
        }
    }

};

console.log(missingNumber([3,0,1]));
