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
        contenido.innerHTML += `<li><h1>${valor.title}</h1><p>${valor.body}</p><button>s</button></li>`;
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