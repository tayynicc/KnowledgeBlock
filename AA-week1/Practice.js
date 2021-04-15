// let obj1 = {one:1, two:2, three:3}
// let obj2 = {three:3, four:4, five:5}

// let objChk = function (obj1, obj2){
//     let arr = [];
//     // let obj1Key = Object.keys(obj1);
//     // let obj2Key = Object.keys(obj2);
//     // obj1Key.forEach(function(ele){
//     //      if(obj2Key.includes(ele)){
//     //          arr.push(ele);
//     //      }
//     // })
//     for(let ele in obj1){
//         if(obj2[ele] !== undefined){
//             arr.push(ele);
//         }
//     }
//    return arr; 
// }

// console.log(objChk(obj1,obj2));

// let sayHello = function (name, greeting){
//     return function (){
//         return greeting + name; 
//     }
// }

// let myFunc = sayHello("taylor","Hello")

// console.log(myFunc());


let obj = {Monday:1, Tuesday: [1,2,3,4,5]}

let {Tuesday:thisDay, Monday} = obj

//console.log(Tuesday);
console.log(Monday);
console.log(thisDay);