var singleNumber = function(nums) {

    let single = 0;

    for (let i =0; i<nums.length; i++)
    {
        single = single ^ nums[i];
    }
    return single;

};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
