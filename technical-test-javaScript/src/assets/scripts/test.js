let closePath = 0;


/*
 This function is O(n) or linear since it will evaluate the digits one by one in a descending 
 way (starting with the last digit) to evaluate if the number of closed paths increases or not.
 */
function closePaths(number){

    if(number>0){
        //the last digit is taken and evaluated in the switch
        switch (number%10) {
            case 8: closePath+=2;
            break;
    
            case 0:
            case 4:
            case 6:
            case 9:closePath++;
            break;
    
        }
        //the function is returned by removing the last digit
        return closePaths(Math.floor(number/10));
        
        
    }else{
        let result = closePath;
         closePath = 0;
        return result;
    }
    
}

export default closePaths


