//the result should be an >array< of numbers corrisponding to the x-y pairs

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(currentValue, index){
  // for (var i = 0; i < index.length; i++) {
  // }
  // console.log(index);
  // console.log(currentValue);
  // console.log("X: "+ currentValue.x + ", " + "Y: " + currentValue.y);
  // console.log(Math.sqrt(Math.pow(currentValue.x, 2)) +  Math.sqrt(Math.pow(currentValue.y, 2)));
  var sqrt = Math.sqrt(currentValue.x*currentValue.x + currentValue.y*currentValue.y);
  // console.log(Math.floor(Math.sqrt(currentValue.x)) + ", " + Math.floor(Math.sqrt(currentValue.y)));
  // console.log(Math.sqrt(currentValue.x) + Math.sqrt(currentValue.y));

   return sqrt;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


// , y