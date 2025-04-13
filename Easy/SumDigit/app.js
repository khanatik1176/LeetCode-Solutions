var getLucky = function(s, k) {
    
    let sum = 0; 
    for (let i =0; i<s.length; i++)
    {
        let value = s.charCodeAt(i) - 96;
        sum+= Math.floor(value/10) + (value%10);
    }

    for (let i =1; i<k; i++)
    {
        let nextSUM = 0;
        while (sum>0)
        {
            nextSUM += sum%10;
            sum = Math.floor(sum/10);

        }
        sum = nextSUM;
    }
    return sum;
}

console.log(getLucky("iiii",2));