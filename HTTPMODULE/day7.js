//create your own server using http 
import http from "http";
 const server=http.createServer((req,res)=>{
    res.writeHead(200,{" content-type:text/html"});
    res.write("helloworld");
    res.end();
 })
 server.listen(3000,()=>{ console.log("server is running on port 3000");

 });

 