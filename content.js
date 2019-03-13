alert("Hello");
alert("Hello world");
console.log("Hello");
intervalChecks = setInterval(() => {
    var whatsAppBtn = document.getElementById("action-button");
    if(whatsAppBtn){
        whatsAppBtn.click();
        clearInterval(intervalChecks);
        console.log(whatsAppBtn);
        whatsAppBtn.click();
    }
}, 2000);
