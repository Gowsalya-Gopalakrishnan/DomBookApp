import { baseUrl } from "./baseUrl.js";
window.onload=()=>{
    getdata();
}
let form = document.getElementById("form");
form.addEventListener("submit", async function(){
    let title = form.title.value;
    let author = form.author.value;
    let category = form.category.value;
    let obj = {
         title,author,category,  
        isAvailable: true,
        isVerified: false,
        borrowedDays: null,
        imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
      };
      
    try{
        await fetch(`${baseUrl}/main`,{
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
});
function getdata(){
    fetch(`${baseUrl}/main`)
    .then((res)=>res.json)
    .then((data)=>{
        displaydata(el);
    })
}
function displaydata(arr){
    let cont = document.getElementById("cont");
    cont.innerHTML = "";
    arr.map((el,i)=>{
        let card = document.createElement("div");

        let title = document.createElement("h4");
        title.textContent = `Title : ${el.title}`;
        let author = document.createElement("h4");
        author.textContent = `Author : ${el.author}`;
        let category = document.createElement("h4");
        category.textContent = `Category : ${el.category}`;
        let status = document.createElement("h4");
        status.textContent = `Available status : ${el.isAvailable == true}`;
        let borrowedDays =  document.createElement("h4");
        borrowedDays.textContent = `Borrowed Status : ${el.borrowedDays}`;

        let img = document.createElement("img");
        img.src= `https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg`;
        let verifybtn = document.createElement("button");
        verifybtn.textContent = "Verify Book";
        verifybtn.addEventListener("click",function(){
            verifyfun(el);

        })

        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete Book";
        deletebtn.addEventListener("click",function(){
            fetch(`${baseUrl}/main`,{
                method:"DELETE"
            })
            
        })

        card.append(title,author,category,status,borrowedDays);
        cont.append(card);
        
    })
}
function verifyfun(el){
    // if(el.isVerified == true){
    //  let ver =    verifybtn.disabled = true;
// }
let updated = {...el,isVerified  : verifybtn.disabled = true}
fetch(`${baseUrl}/main`,{
    method:"PATCH",
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(updated);
}).then(()=>{
    alert("updated");
}).catch((err)=>{
    console.log(err);
    alert("something went wrong");
})
}