alert("Hello 2 ");
intervalCheck = setInterval(() => {
    var sendWhatsapp = document.getElementsByClassName("_35EW6")[0];
    if(sendWhatsapp){
        console.log("Hello 2 ");
        sendWhatsapp.click();
        clearInterval(intervalCheck);
    }
}, 5000);
