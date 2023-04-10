// data type conversion(coercion)to convert one data to another
// implicit
// 2 got converted to a string and they are join together "1"+"2"
console.log("1"+2) 
// 1 is converted to a number 1*2
console.log("1"*2)

// explicit conversion-type casting
// 2 get converted to Number-2
console.log(Number("2"))
// 1 get converted to string "1"
console.log(String(1));
// type conversion
let toNum="25";
toNum=Number(toNum)
console.log(toNum,typeof toNum)

let toNum1="test";
toNum=Number(toNum1)
console.log(toNum1,typeof toNum1)

let food=["ayat","mola","kuzora","bread","eggs"]
console.log(food.length);
console.log(food[food.length-1])
console.log(food[3]);
// if you want the length to be throw,it only print values of the number pass in then downward
food.length=2
console.log(food);
let food1=["ayat","mola","kuzora","bread","eggs"]
console.log(food1.indexOf("kuzora"));
console.log(food1[4]);
console.log(food1.includes("maji"));
let foods1=food1.concat(["ka","gera","weak"])
console.log(foods1)
console.log(food1.join(","));
// change string to Array
let my="1,2,3"
console.log(my.split(","));
let food2=["ayat","mola","kuzora","bread","eggs"]
console.log(food2.slice(2,4));
console.log(food2.splice(2,4));
console.log(food1.splice(2,4,"alas"));
console.log(food2.splice(2,1,"ali"));
console.log(food2);
let food3=["1","2","3","4","5"]
console.log(food3.splice(2,1,"6"));
console.log(food3);

// looping
let food4=["ayat","mola","kuzora","bread","eggs"]
food4.forEach(
    function(value,index,array){
        console.log(value)
        console.log(index);
        console.log(array);
    }
)

let food5=["ayat","mola","kuora","bread","eggs"]
food5.forEach(item)
    function item(value,index,array){
        console.log("a["+index +"]="+array);
    
}

// let num=[1,3,2,4,5]
// let sum=0;
// num.forEach(item=>{
//     function item(value,index,array)
//         sum+=item
// })
// console.log(sum);

// let numbers1=[1,2,3,4,5,6,7,8,9,10]
// let sum1=0;
// numbers1.forEach(item=>{
//     function item(value,index,array)
//     sum1+=item
// })
// console.log(sum1)
// count the number of teimes a value appear

let num1=[1,3,2,4,5]
let count={}
num1.forEach(item=>{
    if(count[item]){
        count[item]++
    }
    else{
  count[item]=1
    }
})
console.log(count)

let names1=["johnny","bosi","milly","johnny","johnny","bosi"]
let count1={}
names1.forEach(item=>{
  if(count1[item]){
  count1[item]++;
  }
  else{
    count1[item]=1;
  }
})
console.log(count1)

let letters=["a","b","a","b","c","d","a"]
let count2={}
letters.forEach(item=>{
    if(count2[item]){
        count[item]++;
    }
    else{
        count2[item]=1;
    }
});
console.log(count2);


let num8=[2,3,4,5,6,7]
let count4={}
num8.forEach(item=>{
    if(count4[item]){
        count4[item]++
    }
    else{
        count4[item]
    }
})
console.log(count4);

let num9=[2,3,4,5,6,7]
function double(value){
return value*2
}
let doubleV=num9.map(double)
console.log(doubleV);

let num10=[2,3,4,5,6,7]
let sum7=0;
num10.forEach(item=>
function item(value,array,index){
      sum+=item
})
console.log(sum7);