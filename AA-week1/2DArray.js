//index into the inner elements of a 2D array
//use nested loops to iterate through a 2D array


//arrays that conain arrays
let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];


//To gain access to the innermost elements, we simply need to apply another set of indexing brackets!

//In the nested loops above, the i index refers to the current "outter" and the j index refers to the current "inner".
let array = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log(subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
}



// When is a 2D array practical?
// As a preview of things to come let's briefly mention when you'll find a 2D array useful in your future projects. Imagine how'd you represent a "grid":

// tic-tac-toe (3x3 grid)
// chess (8x8 grid)
// sudoku (9x9 grid)
// excel (a sheet is an arbitrarily sized 2D array)
