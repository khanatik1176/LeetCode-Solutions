var validParenthesis= function(s) {

    let parenthesisSet = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    let stack = [];
    let message = "";

    for(let i =0; i<s.length;i++)
    {
        let val = s[i];

        if(parenthesisSet[val])
        {
            stack.push(val);
            
        }

        else
        {
            let top = stack.pop();

            if(val !== parenthesisSet[top])
            {
                message = false;
                return message;
            }
        }

        
    }
    
    if(stack.length===0)
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
console.log(validParenthesis("{"));


