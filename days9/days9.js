


import http from "http";
const server= http.createServer((req,res)=>{
    res.writeHead(200,=>{
        console.log("connection stablished successfully")
    })
    if(req.url===" /"){
        res.end("<h1>this si Home page</h1>");
        
    }
    else if
    
res.end("<h1>this si Home page</h1>");
})
server.listen(3001,()=>{
    console.log("sever is running on http://localhost:")
})