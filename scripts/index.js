let form = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    let email = form.email.value;
    let password =  form.password.value;

    let obj = {email,password};
    if(email === "admin@empher.com" && password === "empher@123"){
        localStorage.setItem("loginData",email)
        // localStorage.setItem("loginData",password)
        alert("Logged in as Admin.");
        form.reset();
        window.location.href = "admin.html";
    }
    else if(email === "user@empher.com" && password === "user@123"){
        localStorage.setItem("loginData",email)
        // localStorage.setItem("loginData",password)
        window.location.href = "books.html";
    }
    else{
        alert("something went wrong pleaser try again later");
        form.reset();
    }

    
})