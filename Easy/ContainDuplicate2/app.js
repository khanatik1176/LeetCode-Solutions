var containsNearbyDuplicate = function(nums, k) {
    const seen = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (seen.hasOwnProperty(nums[i]) && i - seen[nums[i]] <= k) {
        return true;
      }
      seen[nums[i]] = i;
    }
  
    return false;
  };
console.log(containsNearbyDuplicate([1,2,3,1],3))