const express=require('express');
const app=express();

const {handler}=require('./controllers/lib/index');

app.use(express.json());
app.post("*",async(req,resp)=>{
    console.log(req.body);
    resp.send(await handler(req));
    // resp.send("hello");
})


app.get('*',async(req,resp)=>{

    resp.send(await handler(req));
})



let PORT=process.env.PORT||80;
app.listen(PORT,(err)=>{
   
    if(err)console.log(err);
    console.log(`Server is Running on ${PORT}`);

});