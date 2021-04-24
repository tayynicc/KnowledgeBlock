// let is declared with a defalut value of undefined if none is given to it 

// var declared variables hoist them to the top of the scope making it accessable anywhere in that scope 

// let still hoist to the top of the scope but will be unavaliable unitll it is given a value because it is in the temporal dead zone 
    // if it is delcared and no value given it hods the vlaue undefined 

//declaring a unassigned var variable wil;l by defualt evaluate to undefined 

// declaring a new const varuiable must have a vlaue becuse it is not reassignable therefor it will thorw an error if no value is given to it. 

// if you try to reasssign a const variable it will throw an error 

// let variables are blocked scoped meaning they will not be overwritten within the block 
    // you could not reasing a function scoped let inside of an if block. 
// var declared variables are function scoped therefore it can be reassigned anywhere in the function 

// if you called a let declared variable before it is initalized it will throw an error before looking in the outter scope to find value 