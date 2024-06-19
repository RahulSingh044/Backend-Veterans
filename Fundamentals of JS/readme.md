# Fundamental of JavaScript for Backend Development

## Arrays  
collection of similiar and dissimilar data types but only in js.

### forEach 
It is used when you want to perform a function for each element of the array. The same array will be modified after the function.

````bash
arr.forEach(function(value) {

});
````

### map 
It is used to creata the copy of the array to which you performed the function. just like forEach but a sepearated array will be created.

````bash
arr.map(function(value) { 

});
````

### filter
This function also creates a new array based on the function performed on the arr element and it is basically used to filter the the array elements based on specific fucntions 

````bash 
arr.filter(function(value) { 

});
````
### find 
This method is used to find the elements in the array, It return the vallue as soon as first element of that condition is found

````bash
arr.find(function(value) { 

});
````

### indexof
This method is used to find the index of the element in the array, it return -1 if element is not found in the array.

````bash
arr.indexof(12);
````

## Objects
* It is basically a key value pair enclosed in the curly braces

````bash
let obj = {
 key : value;
}
````
* If you want to change the value of the object key you can use the following method 

```` bash
obj.key = value;
````
* If you want that the object couldn't be changed you can use the following

```` bash
Object.freeze(obj);
````

## Functions 
* Function are basically objects in the JS, thus you can find the size of a function too
* length of the function = number of arguments;

````bash
  function abcd(parameters) {

}
````

## Asynchronous js 
It is basically used when the code takes a lot to run, so you send the code to the side stack and proceed to the next line and when the code is completes in the side stack then it bring back to main stack and then the code is executed.