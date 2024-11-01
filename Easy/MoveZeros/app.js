var moveZeroes = function(nums) {

    let lp =0;

    for(let rp =0; rp<nums.length; rp++)
    {
        if(nums[rp] !== 0)
        {
            [nums[rp], nums[lp]] = [nums[lp], nums[rp]];
            lp++;
        }
    }
    return nums;

}
console.log(moveZeroes([0,1,0,3,12]));