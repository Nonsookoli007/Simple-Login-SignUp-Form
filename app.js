const psswrd = document.getElementById("psswrd")
const username = document.getElementById("username")

function valForm(){

if(username.value.length === 0){
    username.style.borderBottom = "3px solid red"
    return false
}else{
    username.style.borderBottom = ""
}

if(psswrd.value.length === 0){
psswrd.style.borderBottom = "3px solid red"
return false
}else{
    psswrd.style.borderBottom = ""
}
}
