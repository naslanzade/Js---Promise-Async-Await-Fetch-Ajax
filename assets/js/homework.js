"use strict"

let tableBody=document.querySelector("tbody");
let button=document.querySelector("button");


function getAllData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(datas => {
        datas.forEach(data => {
            tableBody.innerHTML+=` <tr>
            <th>${data.postId}</th>
            <th>${data.id}</th>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.body}</td>
            </tr>`
            
        });
      })
}

button.addEventListener("click",getAllData)