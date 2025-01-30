
// let ele = document.createElement("div"); 
// ele.innerText = "Dynamic creation of HTML element";
// ele.id = "demo";


// let image = document.createElement("img"); 
// image.src = "./3606208.jpg"; 
// image.alt = "Dynamic Image"; 

// document.body.appendChild(ele);
// document.body.appendChild(image);

// console.log(image);

let form = document.queueSelector("form");
let ser = document.querySelector("form");
let username = document.getElementById("uName");
let pws = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
let uname = username.value;
let uemail = mail.value;
let upass = pws.value;
let userDetails={
    uname, uemail, upass
}
console.log(userDetails);
localStorage.setItem("userData", JSON.stringify(userDetails))

})