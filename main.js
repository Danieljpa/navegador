let url = "https://jsonplaceholder.typicode.com/posts";
let contenido = document.getElementById("contenido");
let inputt = document.getElementById("inputt")
let data = [];

function traerpost()
{
    fetch(url)
    .then(Response => Response.json())
    .then(datos => mostrarpost(datos))
    .then(error => console.log(error))
}

function mostrarpost(datos)
{
    data = datos;
    contenido.innerHTML="";
    for( let valor of datos)
    {
        contenido.innerHTML += `<li><div><h1>${valor.title}</h1><button><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg></button></div><p>${valor.body}</p></li>`;
    }
}

traerpost();

inputt.addEventListener("keyup", function()
{
    let ndatos = data.filter(dato => dato.title.includes(inputt.value));
    contenido.innerHTML = "";
    for( let valor of ndatos)
    {
        contenido.innerHTML += `<li><h1>${valor.title}</h1><p>${valor.body}</p><button>save</button></li>`;
    }
})

let btndark = document.querySelector("#btndark");
const body = document.querySelector("body");
btndark.addEventListener("click", function()
{
    body.classList.toggle("darkmode");
    if(body.classList.contains("darkmode"))
    {
        localStorage.setItem("darkmode","true");
    }
    else
        localStorage.setItem("darkmode","false");
});

if(localStorage.getItem("darkmode") === "true")
{
    body.classList.add("darkmode");
}
else
    body.classList.remove("darkmode");