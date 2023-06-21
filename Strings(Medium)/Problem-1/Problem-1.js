// Ques:-A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

// soln:-


let n = "82734";
function  minPartitions(n) {
    if(n===0 || n===1){
        return 1;
    }
    let max=0;
    for(let i=0;i<n.length;i++){
        if(n[i]>max){
            max=n[i];
        }
    }
    return max;
};
console.log(minPartitions(n))