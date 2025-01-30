let mainEle = document.createElement("div");
mainEle.setAttribute("id", "mainBlock");
mainEle.style.border = "2px solid red"; // corrected "boader" to "border"
mainEle.style.width = "550px";
mainEle.style.height = "550px";

console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class", "topBlock");

let image = document.createElement("img"); // corrected to "img"
image.src = "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg";
image.style.width = "550px";

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class", "bottomBlock");

let h1 = document.createElement("button");
h1.innerText = "CAT";
h1.style.textAlign = "center";

let btn = document.createElement("button");
btn.innerText = "CAT";
btn.style.border = "none"; // corrected "boader" to "border"
btn.style.padding = "20px";
btn.style.backgroundColor = "dodgerblue";
btn.style.color = "white";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);

topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle); // corrected this line to append bottomEle properly
document.body.appendChild(mainEle);
