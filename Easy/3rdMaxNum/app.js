var thirdMax = function(nums) {
    let arr = [...new Set(nums)];
arr.sort((a,b)=> b-a);

if(arr.length >= 3){
  return arr[2]
}else{
  return arr[0]
}

};