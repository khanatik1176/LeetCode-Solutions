var maxProfit = function(prices) {


    let buy = prices[0];
    let sell = 0;
    let maxProfit = 0;

    for(let i =1; i<prices.length; i++)
    {
        if(prices[i]<buy)
        {
            buy = prices[i];
        }
        else
        {
            sell = prices[i];

            if(sell-buy > maxProfit)
            {
                maxProfit = sell-buy;
            }
        }
    }
    return maxProfit;
    

};

console.log(maxProfit([7,1,5,3,6,4]));
