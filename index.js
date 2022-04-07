const { write } = require("fs");
const http = require("http"); //es5

//create a server
http.createServer(function(request, response){
    let user = {name : "John", age : 25};
    // response.write("<h1>Hello Bruh</h1>");
    response.write(JSON.stringify(user))
    response.end();
}).listen(3000)
