
let submitButton=document.getElementById("submit");
submitButton.addEventListener("click",function(e){

    let registrationPassword=document.getElementById("password");
let confirmPassword=document.getElementById("password2");
    if(registrationPassword.value===confirmPassword.value){
        
    password=registrationPassword.value.slice(0,1).toUpperCase();
    newPassword = password+registrationPassword.value.slice(1);
   if(registrationPassword.value===newPassword){
      
       confirmPassword.style.border="normal";
    }
    else{
        alert("must start with uppercase")
        e.preventDefault();
    }
        
    }
    
   else{
        alert("password is invalid");
        e.preventDefault();
        confirmPassword.style.border="2px solid red";
    }

})