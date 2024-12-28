let form = document.getElementById("form");
form.addEventListener("submit",function(event){
    // console.log(form);
    event.preventDefault();
    let email = form.email.value;
    // console.log(email);
    let password =  form.password.value;

    let obj = {email,password};
    if(obj.email === "admin@empher.com" && obj.password === "empher@123"){
        localStorage.setItem("loginData",obj)
        // localStorage.setItem("loginData",password)
        alert("Logged in as Admin.");
        
        window.location.href = "admin.html";
        form.reset();
    }
    else if(email === "user@empher.com" && password === "user@123"){
        localStorage.setItem("loginData",obj)
        // localStorage.setItem("loginData",password)
        window.location.href = "books.html";
    }
    else{
        alert("something went wrong pleaser try again later");
        form.reset();
    }

    let localdata = localStorage.getItem("loginData");
    if(localdata == "" || localdata != "admin@empher.com"){
        alert("Admin Not Logged In.");
        window.location,href= "index.html";
        form.reset();
    }

    

    
})