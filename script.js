var alltodo=document.getElementById("All");
var pendingtodo=document.getElementById("Pending");
var Completedtodo=document.getElementById("Completed");

const api_url="https://jsonplaceholder.typicode.com/todos";
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();
    for (var index=0; index<data.length; index++){
        if (data[index].Completed==false){
            var tag1=document.createElement("li");
            tag1.innerHTML=data[index].title;
            
            console.log(tag1.innerHTML);
            pendingtodo.appendChild(tag1)
        }
        else{
            var tag2=document.createElement("li");
            tag2.innerHTML=data[index].title;
            Completedtodo.appendChild(tag2);
        } 

    }
}
getapi(api_url);


