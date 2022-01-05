let tb=document.getElementById("table");
let xhr= new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
xhr.send();
xhr.onload=function()
{
    let data=JSON.parse(this.responseText);
    for(i in data){
        let rd=`<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td>
       <td> ${data[i].address.street}<br>
       ${data[i].address.suite}<br>
       ${data[i].address.city}<br>
       ${data[i].address.geo.lat}<br>
       ${data[i].address.geo.lng}
       </td>
       
        </tr>`
       tb.innerHTML+=rd;
    }
   
}