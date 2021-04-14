//for in / for of - Beau teaches JavaScript
https://youtu.be/a3KHBqH7njs

//JavaScript for..in Loops
https://youtu.be/prl73KRkB34

// for...in
    //itterates through the keys

    // if you use for...in on arrays it will return the numeric indexes

    for(variable in object){
        statements
    }


    let monsters = {Canada: "sasquatch", Nepal: "yeti", Scottland: "nessie"  }
    console.log(monsters);

    for(let prop in monsters){
        console.log(prop) // will give you keys
        console.log(monsters[prop])  // will give u values
    }


// you can also use for ... in for arrays the variable declared in the () is your i









































    // for..of
    //itterates through the ittirable properties

    for(variable of object){
        statements
    }




// for...in

let person = {fname:"Beau", lname:"Carnes", arms:2};

let text = "";
for(let keys in person){
    text += person[key];

};
console.log(text); // fname , lname , arms
