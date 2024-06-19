const fs = require('fs');

// Create a new file named "test.txt" and write "hello world" to it.
fs.writeFile("test.txt", "hello world", function(err) {
    if (err) console.error(err);
    else console.log("Success");
});

// Append i.e add "first Node.js file" text to the existing "test.txt" file.
fs.appendFile("test.txt", "first Node.js file", function(err) {
   if(err) console.error(err);
   else console.log("Data appended successfully.");
});

fs.rename("test.txt", "change.txt", function(err) {
  if (err) console.error(err);
  else console.log("File renamed successfully.");
});

fs.copyFile("change.txt", "./copyFile/copy.txt", function(err) {
       if (err) console.error(err);
       else console.log("File copied successfully.");
});

// It is used to delte the existing "copy.txt" file
fs.unlink("./copyFile/copy.txt", function(err) {
    if (err) console.error(err);
    else console.log("File deleted successfully.");
})

fs.rmdir("./copyFile", {recursive: true} ,function(err) { 
    if (err) console.error(err);
    else console.log("Directory deleted successfully.");
});

fs.rm("./copyFile", {recursive: true} ,function(err) { 
    if (err) console.error(err);
    else console.log("Directory deleted successfully.");
});

fs.mkdir("directory", function(err) {
   if(err) console.error(err);
   else console.log("Directory created successfully.");    
});

fs.readFile("change.txt", function(err,data) {
    if (err) console.error(err);
    else console.log(data.toString());
});