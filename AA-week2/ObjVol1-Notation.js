//2.Identify when to use . vs [] when accessing values of an object

// dot notation vs bracket notation\

// dot notation is to be used when litterally calling on the string of the key
//bracket notation can be used to call the litteral string or a variable
// Dot notation is easier to write as it uses less code and with that makeing it easier to read
// but when using it you can not use variables as keys
//and the keays cannot contain numbers as their first character
// dot notation is used INSIDE the object wheres bracket notation is used to call on the key
object.key

//////////5 Examples of Dot Notation ///////////

    let myDog = {
  name = "Yo-yo",
  breed = "Mutt",
  color = "Brown",
  sizelb = 70,
  age = 10,
  }
//  object key  value


  console.log(myDog); // prints {name:'Yo-yo' , breed: 'Mutt', color: 'brown', sizelb: 70 , age: 10}
  console.log(myDog.breed) //  Mutt
  console.log(myDog.color) // Brown


//where as bracet notation you can use variables that are assigned to string values.
// it is also okay to use variables and start with numbers. you can not call keys that start with numbers with dot notation 

object['1key']

/////////// 5 Examples of Bracket Notation//////////////

let myCat ={
  name: "onyx",
  color: "grey",
  weightlbs: 9,
  food: {wet: "fancy feast", dry:"Iams" }
}

console.log(myCat);
// prints {
//   name: "onyx",
//   color: "grey",
//   weightlbs: 9,
//   food: {wet: "fancy feast", dry:"Iams" }
// }
