var containsDuplicate = function (nums) {

    let result = new Set();

    for (let i = 0; i < nums.length; i++){
        if (result.has(nums[i])){
            return true;
        }
        result.add(nums[i]);
    }
    console.log(result);
    return false;
};

console.log(containsDuplicate([1,2,3,1]));