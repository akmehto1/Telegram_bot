const {handleMessage} = require('./telegram');


 async function handler(req) {
   
    const {body}=req;
  console.log("Handler")
   if(body){
    const messageObj=body.message;
    await handleMessage(messageObj);
   }


   return ;
}


module.exports={handler};
