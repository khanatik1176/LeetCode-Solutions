var search = function (nums, target) {
    let index = 0;
    let flag = 0;
    for (let i = 0; i < nums.length; i++) { 
      if (nums[i] === target) {
          index = i;
          flag = 1;
      }
      if(flag === 0)
      {
          index = -1;
      }
    }
    return index;
  };

console.log(search([-1, 0, 3, 5, 9, 12], 9));

console.log(search([-1, 0, 3, 5, 10, 12], 9));
