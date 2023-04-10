const numbers=[1,2,3,4,5];
const numbersDouble=numbers.map(double);
function double(values,arr,index){
    return values * 2
}
console.log(numbersDouble);

const nums=[2,4,6,8];
const numsDivision=nums.map(division);
function division(values,arr,index){
    return values / 2
}
console.log(numsDivision);


// map method
// const array=(1,2,3,4);
// const arrayDouble=array.map(double);
// function double(value,arr,index){
//     return value*2;
//   }  
// console.log(arrayDouble);

// to get the total price

const products=[
    {
        name:"laptop",
        price:1000,
        count:5,
    },
    {
        name:"desktop",
        price:1500,
        count:6,
    },
    {
        name:"phone",
        price:900,
        count:2,
    }
];
 const totalValueProducts=products.map(item=>item.price * item.count);
console.log(totalValueProducts);

// const people=[
//     {
//         names:"Becky",
//         age:30,
//         ocuupation:Engineer,
//     },
//     {
//         names:"Rebby",
//         age:25,
//         ocuupation:Doctor,
//     },
//     {
//     names:"Mathew",
//         age:33,
//         ocuupation:Lawyer,
//     },
//     const person=person.map(person=>),
//     console.log(person),
// ]

let course="Javascript is cool";
console.log(course.length);

let course1="   javascript is cool   ";
console.log(course1.trim());

let course2="javascript is cool";
console.log(course2.toUpperCase());

let course3="Javascript Is Cool";
console.log(course3.toLowerCase());

let course4="javascript is cool";
console.log(course4.indexOf("a"));

let course5="javascript is cool";
console.log(course5.lastIndexOf("a"));

let course6="javascript is cool";
console.log(course6.slice(0,10));
let course7="javascript is cool";
console.log(course7.slice(3,8))

let course8="javascript is not cool";
console.log(course8.replace("not","so"));

let course9="javascript is cool";
console.log(course9.charAt(5));

let course10="cow,goat,sheep";
console.log(course10.toString());
console.log()

 
// use the right string method to extract  the channel name
//  dev dreamer in the sentence I am watching dev dreamer
const sentence="I am watching Dev Dreamer";
console.log(sentence.slice(14,25));

// concatenation
let place="I am a sudanese";
let age=" and I live in Kenya";
let placeAge=place.concat("",age);
console.log(placeAge);

let myPhone="254-759-942-644";
let myPhone1=myPhone.replace("-","");
console.log(myPhone1);

// mergeSort

// let arr=[-6,8,4,-2,20]
function divideArr(arr){
    if(arr.length<=1){
        return arr
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sortArr(divideArr(left),divideArr(right))
}
function sortArr(left,right){
let newEmptyArr=[]
while(left.length && right.length){
if(left[0]<right[0]){
    newEmptyArr.push(left.shift())
} 
else{
     newEmptyArr.push(right.shift())
}
}
return [...newEmptyArr, ...left, ...right]
     
}
let arr=[-6,20,8,-2,4]
console.log(divideArr(arr))


function divideArray(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    return sortArray(divideArray(left),divideArray(right))
}
function sortArray(left,right){
 let newEmptyArray=[]
while(left.length && right.length){
    if(left[0]<right[0]){
        newEmptyArray.push(left.shift())    
    }
    else{
    newEmptyArray.push(right.shift())
    }
}
return [...newEmptyArray,...left,...right]
}
let num=[3,6,7,90,5,2]
console.log(divideArray(num))


function divideArrays(numbers1){
    if(numbers1.length<=1){
        return numbers1
    }
        let middle=Math.floor(numbers1.length/2)
        let left=numbers1.slice(0,middle)
        let right=numbers1.slice(middle)
        return sortArrays(divideArrays(left),divideArrays(right))
}
function sortArrays(left,right){
   let newEmptyArrays=[]
    while(left.length && right.length){
        if(left<right){
            newEmptyArrays.push(left.shift())
        }
        else{
        newEmptyArrays.push(right.shift())
    }
        
    }
    return [...newEmptyArrays,...left,...right]
}
let numbers1=[2,4,9,6,1,5,7]
console.log(divideArrays(numbers1))

function divideNumb(numb){
    if(numb.length<=1){
        return numb
    }
    let middle=Math.floor(numb.length/2)
    let left=numb.slice(0,middle) 
    let right=numb.slice(middle)
    return sortNumb(divideNumb(left),divideNumb(right))
}
function sortNumb(left,right){
    let newEmptyNumb=[]
    while(left.length && right.length){
        if(left<right){
        newEmptyNumb.push(left.shift())
    }
    else{
        newEmptyNumb.push(right.shift())
}
    }

return [...newEmptyNumb,...left,...right]
}
let numb=[9,6,8,5,4,,0,2,1]
console.log(divideNumb(numb))
// forEach sum
let numbers2=[1,2,3,4,5]
let sum=0;
numbers2.forEach(item=>{
sum+=item
})
console.log(sum)