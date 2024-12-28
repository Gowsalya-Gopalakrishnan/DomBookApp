import { baseUrl } from "./baseUrl.js";
let form = document.getElementById("form");
form.addEventListener("submit",function(){
    let title = form.title.value;
    let author = form.author.value;
    let category = form.category.value;
    let obj = {title,author,category};

    try{
        fetch(`${baseUrl}/main`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(obj)
        });
        alert("Book Added Successfully");
    }catch(err){
        console.log(err);
        alert("something went wrong please try again later");
    }
})