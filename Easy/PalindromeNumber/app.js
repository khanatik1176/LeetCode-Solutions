
var isPalindrome = function(x) {

    let container = x;
    let reverseContainer = '';
    let message = '';

    for(let j = container.length-1; j>=0; j-- )
    {
        reverseContainer += container[j];
        
    }

        if(container === reverseContainer)
        {
            message = true;

            return message;
        }

        else
        {
            message = false;
            return message;
        }
    
};

console.log(isPalindrome('121')); // true
console.log(isPalindrome('-121')); // false
console.log(isPalindrome('10')); // false