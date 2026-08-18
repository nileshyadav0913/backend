// evet emitter
//emit()on()
const EventEmitter=require("events");
const event =new EventEmitter();
// event.on("greet",()=>{
//     console.log ("this is event emiter");
// })
event.once("greet",()=>{
    console.log("event trigger only one time")
})
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");

//  to create custom EventEmitter that trigger "greet"of "exit"
class MyEmitter extends EventEmitter{}
const event=new MyEmitter();
event.on("greet",(name)=>{
    console.log(`hello ${name}`);//tamplate literals`${}`
})
event.on("exit",()=>)
event.emit("greet","cse25");
event.emit("exit");