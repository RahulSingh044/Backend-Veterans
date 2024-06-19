
var arr = [1,2,3,5,6,8];

arr.forEach(function(value) {
  console.log(value + " hello");
});


// This function will create a new array of size equal to the previous array and return 12, and each element of arr will be replaced with 12
var newarray = arr.map((value) => {
  return 12;
});
console.log(newarray);

arr.map(function(value) { 
  console.log(value*5);
});


let array = arr.filter(function(value) { 
  if (value%2 === 0) return true;
});
console.log(array);


let element = arr.find(function(value) {
   if (value === 3) return true;
});
console.log(element);


// OBJECTS
var person = {
  name: "John",
  age: 30,
  city: "New York"
};


// async function

async function abcd() {
  var data = await fetch('https://randomuser.me/api/');
  var res = await data.json();
  console.log(res.results[0].name);
}

abcd();