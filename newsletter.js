let subscribeButton = document.querySelector(".js-subscribe")
let bigcontainer = document.getElementById("big-container")
let invalidmessage = document.getElementById("invalidmessage")

const element = document.getElementById("js-input");
console.log(element.checkValidity());

function checkemailformat(){
    const email=document.getElementById("js-input");
    if (!email.checkValidity()){
        document.getElementById("label").innerHTML = "hello";
    }
}


subscribeButton.addEventListener("click",()=>{


    console.log("sub button pressed");
    const email=document.getElementById("js-input");
    if (!email.checkValidity()){
        
        invalidmessage.style.display ="inline";
        invalidmessage.style.fontSize ="13px";
        invalidmessage.style.color ="red";


       invalidmessage.innerHTML = "Valid email required";
    }else{
   
        bigcontainer.remove();
        clicksubscribe();
    };

})



        
function clicksubscribe(){


    document.body.innerHTML = 
    `
    <div id="newcontainer">
        <img  id="listicon" src="assets/images/icon-list.svg" alt="listicon">

        <div id="thankyoumessage">Thanks for subscribing!</div>

        <div id="confirmMessage"><p>A confirmation email has been sent to <b>ash@loremcompany.com</b>. 
        Please open it and click the button inside to confirm your subscription.</p>
        </div>

        <button id="dismiss" type="button">Dimiss Message</button>
    </div>
    `;

    let newcontainer= document.getElementById("newcontainer");
    let listicon = document.getElementById("listicon");
    let thankyoumessage = document.getElementById("thankyoumessage")
    let confirmMessage = document.getElementById("confirmMessage")
    let dimiss = document.getElementById("dismiss")

    //document.body.style.backgroundColor="white";
    //newcontainer.style.width ="375px";
    //newcontainer.style.height ="800px";

    if (window.innerWidth < 900 ){
        newcontainer.style.width ="375px";
        newcontainer.style.backgroundColor = "white";
        //newcontainer.style.marginTop = "100px";
        newcontainer.style.margin ="auto";
        newcontainer.style.height ="100vh";
    
    
        //newcontainer.style.margin="auto";
        listicon.style.paddingTop="100px";
        listicon.style.width="70px";
        listicon.style.alignContent ="left";
        listicon.style.marginLeft = "20px";
        listicon.style.marginBottom = "40px";
        listicon.style.display="block";
    
        thankyoumessage.style.display = "block";
        thankyoumessage.style.fontSize = "50px";
        thankyoumessage.style.fontWeight ="bold";
        thankyoumessage.style.marginLeft = "20px";
    
        confirmMessage.style.display = "block";
        confirmMessage.style.fontSize = "15px";
        confirmMessage.style.marginLeft = "20px";
    
        dismiss.style.display = "block";
        dimiss.style.marginTop = "300px";
        dimiss.style.marginLeft = "20px";
        dimiss.style.marginRight = "20px";
        dimiss.style.width ="335px"
        dimiss.style.maxWidth = "100vw" ;
        dimiss.style.border ="none";


    }else {
        newcontainer.style.width ="420px";
        newcontainer.style.backgroundColor = "white";
        //newcontainer.style.marginTop = "100px";
        newcontainer.style.margin ="auto";
        newcontainer.style.height ="auto";
        newcontainer.style.borderRadius ="15px";
        newcontainer.style.paddingBottom="30px";
    
    
        //newcontainer.style.margin="auto";
        listicon.style.paddingTop="30px";
        listicon.style.width="70px";
        listicon.style.alignContent ="left";
        listicon.style.marginLeft = "30px";
        listicon.style.marginBottom = "40px";
        listicon.style.display="block";
    
        thankyoumessage.style.display = "block";
        thankyoumessage.style.fontSize = "50px";
        thankyoumessage.style.fontWeight ="bold";
        thankyoumessage.style.marginLeft = "30px";
    
        confirmMessage.style.display = "block";
        confirmMessage.style.fontSize = "15px";
        confirmMessage.style.textAlign ="left";
        confirmMessage.style.width= "360px";
        confirmMessage.style.marginLeft = "30px";
        //confirmMessage.style.paddingRight ="30";
    
        dismiss.style.display = "block";
        dimiss.style.marginTop = "40px";
        dimiss.style.marginLeft = "30px";
        dimiss.style.marginRight = "30px";
        dimiss.style.width ="360px"
        dimiss.style.maxWidth = "100vw" ;
        dimiss.style.border ="none";
        dimiss.style.marginBottom = "40px";

    }
    

    dimiss.addEventListener("click",()=>{
        dimiss.style.backgroundImage ="linear-gradient(to right, red , orange)";
    

    })




}

   
    

