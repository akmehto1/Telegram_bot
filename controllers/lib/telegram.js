const {axiosInstancs}=require('./axions');

function sendMessage(messageObj,messageText){
    return axiosInstancs.get("sendMessage",{
        chat_id:messageObj.chat.id,
        text:messageText
    });
}


  function handleMessage(messageObj){
    const messageText=messageObj.text || "";
    console.log(messageText);

    if(messageText.charAt(0)==='/'){
        const command=messageText.substr(1);
        switch(command){
            case "start" :
            return sendMessage(
                messageObj,"Welcome to the bot! \n I can help you with these commands:\n"
            );
            default:
                return sendMessage(messageObj,"hello ai");
        }

    }
    else{
        return sendMessage(messageObj,messageText);
    }
}


module.exports={handleMessage};