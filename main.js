var http = require('http');
http.createServer(function (req,res) {
  console.log('server is added!');//发了两次请求，另外一次请求icon
  res.end('hello world!');
}).listen(8081,function(){
  console.log('listen is added!');//建立了链接之后立马输出
});
