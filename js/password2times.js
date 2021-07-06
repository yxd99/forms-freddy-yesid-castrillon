"use strict";

const nextStep = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if(password === confirmPassword){
        alert("coincide");
        return true;
    }
    const form = document.getElementById("formPassword2Times");
    console.log(form);
    alert("No coincide");
    return false;
}