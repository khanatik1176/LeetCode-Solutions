var plusOne = function(digits) {

    let str = "";
    let number = 0;
    let lnumber = "";
    let modArr = [];


    for(let i =0; i<digits.length; i++)
    {

        if(digits.length<17)
        {

            str = str + digits[i];
            number = parseInt(str)+1;
    
            modArr = Array.from(String(number),Number);
            
        }

        else
        {
            str = str+digits[i];
            lnumber = BigInt(str)+BigInt(1);

            modArr = Array.from(String(lnumber),Number);
        }
        


    }
    

    return modArr;


};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));


