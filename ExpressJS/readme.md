# Express JS
* It is an npm package
* It's a framework
* It manages everything from recieving the request and give response

## Routes
Anyhting written in the URL except domain name **i.e facebook.com/profile**, where /profile is a route.
````bash
app.get('route', requestHandler(req,res) {
  res.sed("Something");
});
````

## nodemon
It is used to restart the server automatically, whenever there is change in the backend.
````bash
npx nodemon script.js
````

## Middleware
Middleware sits between the client-side and server-side components. Suppose you want to perform some task such as authentication, logging, error handling, data parsing, and more, before the request goes to server, in that case you use middleware
````bash
app.use((req, res, next) => {
  // console.log("");
  next(); // It is used to forward the request to the next 
});
````

