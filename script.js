let foods=["banana","apple"]
console.log(foods.length);

// find the last value .length-1
let supers=["superman","batman","aquaman","spiderman"]
console.log(supers[supers.length-1]);

//   to find an element from an index position
let supers2=["superman","batman","aquaman","spiderman"]
console.log(supers2[3]);
let supers3=["superman","batman","aquaman","spiderman"]
console.log(supers3[supers3.length-1]);
let supers6=["superman","batman","aquaman","spiderman"]
console.log(supers6[supers6.length-2]);
let supers1=["superman","batman","aquaman","spiderman"]
console.log(supers1[supers1.length-3]);

// // if you want to get the length to be 2 values
// after this,the rest of remaining value do not exist hence it will return empty

let books=["English","chem","Bio","Histo"]
books.length=2;
console.log(books);

let book=["CRE","Math","Kisw","Chem"]
console.log(book.indexOf("Kisw"))

// if we use a value that does not exist it return -16
let subjects=["Chem","Bio","Kisw","Hist"]
console.log(subjects.indexOf("Physics"))

// includes return true if value exist in the arrays and false if the value does not exist
// this method is case sensitive if you write Bio with bio it will be different value
let subject=["chem","BIO","Math","Physics"]
console.log(subject.includes("kisw"))

let num=[1,2,3,4]
console.log(num.pop());

let nums=[6,4,78]
console.log(nums.shift())

let numb=[67,3,4,6,9]
console.log(numb.push("10"));

let z=[1,3,4,5,9]
console.log(z.unshift("2"));

let names=["becky","lucky","luccy","joky"]
let newNames=names.concat(["Mary","prisca","johny"])
console.log(newNames)

let y=[1,2,3,4,5]
let newy=y.concat([6,7,8,9]);
console.log(newy);

// join turn arrays into string you can either add coma or not or any

let me=["jay","yoy","jom","job"]
console.log(me.join(","));

// split turn string into an array
let mes="jay,john,majok,james"
console.log(mes.split(","))

// slice part of an array from where start to end but leaves the last value
let student=["mary","marie","martha","maria","miriam","maya"]
console.log(student.slice(1,4))

// splice remove item from an array and replaces to specified index
// at position 3 ,remove 1 element
let students=["mary","marie","martha","maria","miriam","maya"]
console.log(students.splice(3,1,"mara"))

// console.log(students.splice(3,1));
let student1=["mary","marie","martha","maria","miriam","maya"]
 console.log(student1.splice(3,3,"maggy"));

// reverse alter the order of array
let student2=["mary","marie","martha","maria","miriam","maya"]
console.log(student2.reverse())

// sort array alphabetically
let subject1=["Chem","BIO","Math","Physics"]
console.log(subject1.sort())

// Create an Array with the following fruits:banana,orange,apple.Use the correct array
//  method to add cherry and pinneapple to the begining an an array then add plum 
//  and grapes to the end
let fruits=["banana","orange","orange"]
console.log(fruits.unshift("cherry","pineapple"))
console.log(fruits)
console.log(fruits.push("plum","grapes"))
console.log(fruits)

// Replace orange with lemon using splice method
console.log(fruits.splice(3,1,"lemon"))

// sort the valuse alphabetically
console.log(fruits.sort())

let student3=["mary","marie","martha","maria","miriam","maya"]
student3.forEach(
function (value,index,array){
  console.log(value)
})
let student5=["mary","marie","martha","maria","miriam","maya"]
student5.forEach(
    function(value,index,array){
    console.log(array);
    })

    // to find index and array
let student4=["mary","marie","martha","maria","miriam","maya"]
student4.forEach(item)
function item(value,index,array){
    console.log("a["+ index + "]="+array)
}

// iterators are used to loop Over/iterate values
// forEach
// to calculate the sum of numbers from array

let numbers1=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
numbers1.forEach(item=>{
    function item(value,index,array)
    sum+=item
})
console.log(sum)

// count the number of times a value exist in the array
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
let count={}
letters.forEach(item=>{
    if(count[item]){
        count[item]++;
    }
    else{
        count[item]=1;
    }
});
console.log(count);
// to identify indices of each item
let order=[1,2,3,4,5]
order.f
// to iterate/change into array
let orders=[1,2,3,4,5]
orders.forEach((item,index,arr)=>{
    console.log(arr);
})

// Map method when returning a value
let names2=["johnny","bosi","milly","johnny","johnny","bosi"]
function uppercase(value){
    return value.toUpperCase();
}
let namecap=names2.map(uppercase);
console.log(namecap);


// multiply
let numbers3=[2,4,6,8]
function double(x){
    return x*2
}
let doublex=numbers3.map(double)
console.log(doublex)
// addition
let numbers2=[32,43,21]
function addition(n){
    return n+1
}
let addition1=numbers2.map(addition)
console.log(addition1);
// division
let numbers4=[24,12,48]
function divide(d){
    return d/2
}
let divided=numbers4.map(divide)
console.log(divided);

// substraction
let numbers5=[5,6,7,9]
function substract(s){
    return s-4
}
let substracts=numbers5.map(substract)
console.log(substracts);

// modulus
let reamainder=[4,5,6,7,8,9]
function modulus(m){
    return m%3
}
let modulusm=reamainder.map(modulus)
console.log(modulusm);

// filter method 
let numbers6=[1,2,3,4,5,34,56,7,8,12,234,99,90]
let evenNumbers=numbers6.filter(
function evenNumbers(value,index,array){
    return value % 2===0;
})
console.log(evenNumbers);

let numbers7=[2,3,4,5,6,7,8]
let oddNumbers=numbers7.filter(
    function oddNumbers(value,index,array){
        return value % 2 !=0;
    }
)
console.log(oddNumbers);

// reduce method it reduce array don to single value
let numbers8=[21,2,3,4,5,6,10]
function add(total,value,index,array){
    return total+value
}
let sum1=numbers8.reduce(add)
console.log(sum1);

// some method if the value is les than ten ,it return false
let numbers9=[2,31,14,41,6,17]
let higherThanTen=numbers9.some(
    function(value){
        return value>10
    }
)
console.log(higherThanTen)

// Every method returns true if all the values pass the test
let numbers10=[2,31,14,41,6,17]
let AllHigherThan10=numbers10.every(
    function(value){
        return value>10
    }

)
console.log(AllHigherThan10);
// find method if the value is not there/found,it return undefined
let names3=["johnny","bosi","milly","johnny","johnny","bosi"]
let findName=names3.find(
    function(value){
        return value=== "milly"
    }
)
console.log(findName);
// to find index position and return -1 when the value is not found
let names4=["johnny","bosi","milly","johnny","johnny","mercy"]
let findNames=names4.findIndex(
    function(value){
        return value==="mercy"
    }
)
console.log(findNames);

// Loop through the following array using the forEach method for each to alert each
// item including he index number eg a=apple-1 etc

let fruit=["Apple","Orange","Mango","Pineapple","Avocado"]
fruit.forEach(item)
function item(value,index,array){
console.log("a["+ index + "]=" +array);
}

// create a new array using the relevant iterator method that takes the 
// fruits that takes the fruits and set them to uppercase.
let fruits1=["Apple","Orange","Mango","Pineapple","Avocado"]
let fruitsCap=fruits.map(
    function (value,index,array){
        return value.toUpperCase()
    }
)
console.log(fruitsCap)

// use the right iterator method to check to see each fruit contains more than three letters 
// console log the boolean results
let fruits2=fruits.every(
    function(value){
        return value.length>3
    }
)
console.log(fruits2);

// to find the last number
let a=["becky","masi","jock"]
console.log(a[a.length-1])
// to find second last number or the number that follows
let b=["becky","masi","jock","jom","jimma"]
console.log(b[b.length-2])
console.log(b.length=3)

let c=["betty","bitty"]
console.log(c.push("bree"))
console.log(c)
console.log(c.unshift("angeth"))
console.log(c)
console.log(c.pop())
console.log(c.shift())
console.log(c);

let d=["becky","masi","jock","jom","jimma"]
console.log(d.indexOf("becky"));
console.log(d.includes("masi"))
let newD=d.concat(["betty","bitty"])
console.log(newD)
let us=["hopper","anita","age"]
let newUs=us.concat(["john","school","class"])
console.log(newUs)

//join method to turn array into string
let u=["hopper","anita","age"]
console.log(u.join(""))
console.log(u.join(","))

// split turn string to array
let uu="hopper,anita,age"
console.log(uu.split(","))

// it returns the first number and also the end
let u1=["hopper","anita","age"]
console.log(u1.splice(0,2))

// slice returns from the start value and dont return the last and 
// splice returns the numbers included all from first to end
let u2=["hopper","anita","age","class","school","college"]
console.log(u2.slice(1,4));
console.log(u2.splice(1,4));

// splice cannot be use on string
let text="beautiful"
console.log(text.slice(0,6))

// splice can also be used to remove element and add another 
// to the same index to the indicated index position
 let e=["hopper","anita","age","class","school","college"]
 console.log(e.splice(3,1,"mauntain"))
 console.log(e);

 let e1=["hopper","anita","age","class","school","college"]
 console.log(e1.sort());
 console.log(e1.reverse());

    // forEach
//  to get value without returning, you use for forEach
let person=["hopper","anita","age","class","school","college"]
 person.forEach(
    function(value,index,array){
        console.log(value)
    }
 )
 let person2=["hopper","anita","age","class","school","college"]
 person2.forEach(
    function(value,index,array){
        console.log(array)
        // console.log(index);
    }
 )
//  to get  an array and index at the same using forEach
 let person1=["hopper","anita","age","class","school","college"]
 person1.forEach(item)
 function item(value,index,array){
    console.log("a["+index+"]="+array)
 }
//  to get sum using forEach
let numbers=[1,2,3,4,5,6,7,8,9]
let sum3=0;
numbers.forEach(item=>{
    function item(value,index,array)
     sum+=item
})
console.log(sum)

// to count number of times a value appear using foreach
let number=[1,2,3,4,1,2,3,5]
let count3={}
number.forEach(item=>{
    if(count3[item]){
        count3[item]++
    }
    else{
        count3[item=1]
    }
})
console.log(count3)

let number1=[1,2,3,4,5]
let sum4=0;
number1.forEach(item=>{
    function item(value,index,index){
        sum+=item
    }
})
console.log(sum4)

let nam=["bii","shot","bet"]
nam.forEach(item)
function item(value,index,arrays){
    console.log("a["+index + "]="+arrays)
}
// map
let number4=[1,2,3,4,5]
function double(w){
    return w*2
}
let doublew=number4.map(double)
console.log(doublew);

// filter
let f=[1,2,3,4,6,7]
let evenNumbers1=f.filter(
function evenNumbers1(value,index,array){
   return value %2===0
}
)
console.log(evenNumbers1)


let h=[1,2,3,4,5,6]
h1.forEach(item)
    function item(value,index,array){
    console.log("a["+index +"]="+array);
}

let k=[1,2,3,4,5]
let sum5=0;
k1.forEach(item=>
function item(value,index,array){
    sum+=item
})
console.log(sum5);

let s=[1,2,3,4]
 let sum6=0
s1.forEach(item=>
    function item(value,index,array){
    sum+=item
})
console.log(sum6);

let j=[1,2,3,4]
function j1(i){
  return i*2
}
let j1=j.map(j1)
console.log(j1)

let r=[1,2,3]
function r1(w){
    return w*2
}
let r1=r.map(r1)
console.log(r1)

let arr=[1,2,3,3,2]
function removeduplicate(arr){
    return [...new Set(arr)]
}
console.log(removeduplicate);

