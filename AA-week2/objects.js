// key value paired 
    // key can be used to access the valuse oof " vlaue"

// all key that dont have a value will de assigned undefined 
// if you access a key that exist it will return the value but if you try to access a key that does not exist it will return undefined 

//objects are unorded list 
// objects have keys not indeces no order in the keys 
    
let obj = {name: "taylor" , age: "3240"}

// objects have values instead of elements 

// key value pairs 

// object keys are strings 
    // to access 

console.log(obj["name"]) // prints "taylor"
console.log(obj.name) // prints taylor 

// if stored in variable like

let thingToCheck = "age"
console.log(obj[thingToCheck]) // prints 3240

// to call it using variable, do not put in quotes and MUST use bracket notation 

//dont notatin will always look for the sting litteral in the object 
// to assing a new val into object 

obj['keyname'] = "value"
//or
obj.keyName = "value"


// you can use in keyword to check if key is in object \
let obj = {name: "taylor" , age: "3240"}
if("name" in obj ){
    return true ;
}

// use objects for instant look up time 