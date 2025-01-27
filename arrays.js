// let user1 = "Ramya";
// let user2 = "SaiSmitha";
// let user3 = "Sai nikhil";
// let user4 = "Rahul";
// let user5 = "Prabhas";

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// let users = ["Ramya" , "SaiSmitha" , "Sai Nikhil" , "Rahul" , "Prabhas" , "NTR"];
// console.log(users[0]);
// console.log(users[4]);
// for(let i = 0 ; i<users.length; i++)
// {
//     console.log(users[i]);
// }


//let users = ["Ramya" , "SaiSmitha" , "Sai Nikhil" , "Rahul" , "Prabhas" , "NTR"];
// let x = users.map((user)=>{
//     // console.log(user);
//     return user; //!["Ramya" , "SaiSmitha" , "Sai Nikhil" , "Rahul" , "Prabhas" , "NTR"];
// });
// console.log(x);

// let x = users.forEach((user)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x); // !undefined


//! create array of objects and print the values.

// let userDetails = {
//     name : "Pranav",
//     age:22,
//     company :"Amazon",
//     sal : 1234567890,
//     details:function(){
//         return `My name is ${this.name} and i am working in ${this.company}`
//     }
// };
// console.log(userDetails);
// console.log(userDetails.name);
// console.log(userDetails.details());

//! create nested object and access the property of nested object

// let userDetails = {
//     name : "Pranav",
//     age:22,
//     company :"Amazon",
//     sal : 1234567890,
//     address:{
//         city:"Hyd",
//         area :{
//             areaName:"Hitech",
//             pincode :123456
//         }
//     }

// }

// console.log(userDetails.address.city);
// console.log(userDetails.address.area.areaName);

//! create array of objects and print the values.

// let usersDetails = [
//     {
//         name:"Ramya",
//         city:"Guntur"
//     },
//     {
//         name:"Sai Nikhil",
//         city:"Karimnagar"
//     },
//     {
//         name:"Rahul",
//         city:"Ananthpur"
//     },
//     {
//         name:"Vaishali",
//         city:"Nizambad"
//     },
//     {
//         name:"Priya",
//         city:"Kadapa"
//     }
// ];

// usersDetails.map((x)=>{
//     console.log(x.name);
// })

// console.log(usersDetails[3].name);

//! JSON 

let userDetails ={
    name:"Sam",
    age:25,
    city:"Hyd"
};
console.log(userDetails);

let x = JSON.stringify(userDetails);
console.log("JSON object "+x);

let  y = JSON.parse(x);
console.log(y);