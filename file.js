// console.log("we are venom")
const btnLogin = document.getElementById("btn-login")
const mobile = document.getElementById("mobile")
const pin = document.getElementById("pin")

btnLogin.addEventListener("click",function(){
    if(mobile.value == "01832627508" && pin.value == "0123"){
        window.location.assign("./home.html") 
        mobile.value = ""
        pin.value = ""
    }
    else{
        alert("dude try again.")
    }
})
