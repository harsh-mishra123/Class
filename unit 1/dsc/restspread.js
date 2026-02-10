
// function add(...numbers){
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//         total += numbers[i];
//     }
//     return total
// }
// console.log(add(1,2,3));



// function add(...numbers){
//     let total = 0;
//    for(let i in numbers){   //for let i of bhi chalega
//     total += numbers[i];
//     }
//     return total
// }
// console.log(add(1,2,3));







// const arr1 =[1,2,3,4,5];
// const arr2 = [6,7,8,9,10];

// const combined = [...arr1,...arr2];
// console.log(combined);


// let a = [1,2,3,6,7,9,8,76,54,32,12];
// let[first,sec,...last]= a;
// console.log(first);
// console.log(last);
// console.log(...last);


// let arr1= [1,2,3,4,5];
// let arr2 = [...arr1];
// console.log(arr2);




//even or odd using array function
const even= (a) =>{
if(a%2==0){
    return true;
}
return false;
}
console.log(even(5));
console.log(even(4));



//arrow function that returns reversed string
const reverseString = (str) => {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));



//arrow function av marks and return pass if av>40 else fail
const checkPassFail= (marks) =>{
    let total =0;
    for(let i=0;i<marks.length;i++){
        total += marks[i];
    }
    let average = total/marks.length;
    if(average>40){
        return "Pass";
    }
    return "Fail";
}   
console.log(checkPassFail([50,60,70]));
console.log(checkPassFail([30,20,40]));