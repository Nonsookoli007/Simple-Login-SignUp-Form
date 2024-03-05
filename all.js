const fullName = document.getElementById("fullname")
const email = document.getElementById("email")
const psswrd = document.getElementById("psswrd")
const cPsswrd = document.getElementById("cpsswrd")
const username = document.getElementById("username")

function valForm(){
    if(fullName.value.length === 0){
        fullName.style.borderBottom = "2px solid red"
        return false
    }else{
        fullName.style.borderBottom = ""
    }

    if(username.value.length === 0){
        username.style.borderBottom = "2px solid red"
        return false
    }else{
        username.style.borderBottom = ""
    }
   
    if(email.value.length === 0){
        email.style.borderBottom = "2px solid red"
        return false
    }else{
        email.style.borderBottom = ""
    }
    
    if(psswrd.value.length === 0){
    psswrd.style.borderBottom = "2px solid red"
    return false
    }else{
        psswrd.style.borderBottom = ""
    }

    if(cPsswrd.value.length === 0){
    cPsswrd.style.borderBottom = "2px solid red"
    return false
    }else{
        cPsswrd.style.borderBottom = ""
    }
}