let localdata = localStorage.getItem("loginData");
if(localdata == "" || localdata != "user@empher.com"){
    alert(" Not Logged In.");
    window.location,href= "index.html";
    form.reset();
}

let showavailable = document.createElement("button");
        showavailable.textContent = "Verify Book";
        showavailable.addEventListener("click",function(){
            // verifyfun(el);

        })

        let showborrowed = document.createElement("button");
        showborrowed.textContent = "Delete Book";
        showborrowed.addEventListener("click",function(){
      
        })