// "use strict"

// let students = [
//     {
//         name: "Musa",
//         surname: "Afandiyev",
//         age: 19
//     },
//     {
//         name: "Ramil",
//         surname: "Allahverdiyev",
//         age: 26
//     },
//     {
//         name: "Resul",
//         surname: "Hesenova",
//         age: 15
//     },
//     {
//         name: "Novrasta",
//         surname: "Aslanzade",
//         age: 25
//     },
//     {
//         name: "Gultac",
//         surname: "Jafarova",
//         age: 18
//     }
// ]



// getStudentsByFilter("r");

// function getStudentsByFilter(str){
//   setTimeout(() => {
//     let result=students.filter(m=>m.name.includes(str));
//     console.log(result)

//   }, 3000);

// }

// getStudents();

// let elem = document.querySelector("ul")


// createStudent({ name: "Anar", surname: "Huseynov", age: 36 }, getStudents)

// function getStudents() {
//     setTimeout(() => {
//         let str = "";
//         students.forEach(stu => {
//             str += `<li class="list-group-item"><b>${stu.name}-</b><b>${stu.surname}-</b><b>${stu.age}</b></li>`

//         });


//         elem.innerHTML = str;
//     }, 2000);
// }


// function createStudent(student, callback) {
//     setTimeout(() => {
//         students.push(student)
//         callback();

//     }, 3000);
// }



// function createStudent(student) {

//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             students.push(student);

//             let err=false;
//             if(!err){
//                 resolved(students)
//             }else{
//                 rejected()
//             }



//         }, 3000);
//     })

// }




// function createStudent(student) {

//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             students.push(student);

//             let err=true;
//             if(!err){
//                 resolved(students)
//             }else{
//                 rejected("something is wrong")
//             }
//         }, 3000);
//     })

// }

// createStudent({ name: "Anar", surname: "Huseynov", age: 36 }).then(response=>{
//     console.log(response)
// }).catch(err=>{
//     console.log(err)
// })


// getAll();

// function getAll() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//             let str = "";
//             posts.forEach(post => {
//                 str += `<tr data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
//             <th>${post.id}</th>
//             <td>${post.userId}</td>
//             <td>${post.title}</td>
//             <td>${post.body}</td>                    
//           </tr>`

//             });
//             document.querySelector("tbody").innerHTML = str;
//         })
// }


// setTimeout(() => {
//     let elems = document.querySelectorAll("tbody tr");

//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"))

//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => {

//                 document.querySelector(".modal-header h1").innerText=post.title;
//                 document.querySelector(".modal-body").innerText=post.body;
//             })

//         })

//     });

// }, 2000);



// async function getPost(){
//     let data= await fetch('https://jsonplaceholder.typicode.com/posts');

//     let response=await data.json();

//     console.log(response)
// }

// getPost();



$(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/posts", success: function(result){
      console.log(result)
    }});
  });