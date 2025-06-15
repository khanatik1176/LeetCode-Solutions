var groupAnagrams = function(strs) {
    let map = {};

    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (map[key]) {
            map[key].push(str);
        } else {
            map[key] = [str];
        }
    }

    return Object.values(map);
};



console.log(groupAnagrams( ["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams( [" "]));



