var topKFrequent = function(nums, k) {
    let kHashmap = {}; 

    for (let i = 0; i < nums.length; i++) {
        if (kHashmap.hasOwnProperty(nums[i])) {
            kHashmap[nums[i]]++;
            
        } else {
            kHashmap[nums[i]] = 1;
        }
    }

    let freqArray = Object.entries(kHashmap);
    freqArray.sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(freqArray[i][0])); 
    }

    return result;
};


console.log(topKFrequent([1,1,1,2,2,3],2))
console.log(topKFrequent([1],1))
console.log(topKFrequent([-1, -1],1))