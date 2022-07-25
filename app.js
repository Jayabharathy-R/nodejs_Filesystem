const fs=require("fs");
const os=require("os");
const http=require("http");


var currentdate=new Date();
//console.log(currentdate);

var filename=currentdate.getDay()+'/'+currentdate.getMonth()+'/'+currentdate.getFullYear()+'-'+currentdate.getHours()+':'+currentdate.getMinutes()+':'+currentdate.getMilliseconds()+'.txt';
 //console.log(filename);
var createStream=fs.createWriteStream("hello.txt");
createStream.write("hello the current timestamp is "+currentdate);
createStream.end();


const server=http.createServer((req,res)=>{
  if(req.url==='/createFile'){
    var createStream=fs.createWriteStream(filename);
    createStream.end();
    res.write(JSON.stringify({
        hello: "welcome to port"
  }))
}
res.end();
 })
server.listen(3002);