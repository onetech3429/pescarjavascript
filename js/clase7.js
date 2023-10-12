function mostrar(users){
    //console.log(users[8].phone)
    let main = document.querySelector('main')
    for(let i = 0;  i < users.length ; i++){
        main.innerHTML = main.innerHTML + users[i].name + '<br>'
    }
}  
//OPTIMISTIC UI 
/* let boton = document.querySelector('#boton')
boton.addEventListener('click', (e) => {
    e.preventDefault()
    activar("https://jsonplaceholder.typicode.com/users")
}) */
function activar(url){
 let xhr = new XMLHttpRequest()
 xhr.open('get', url)
 xhr.addEventListener('load', ()=>{
    if(xhr.status == 200){
        actualizar(xhr.response)
    }
 })
 xhr.send()   
}
function actualizar(json){
    boton.classList.remove('btn-danger')
    boton.classList.add('btn-primary')
    //console.log(JSON.parse(json))
    let contenido = JSON.parse(json)
    console.log(contenido.length)
    console.log(contenido[3].name)
    let main = document.querySelector('main')
    main.innerHTML = contenido[3].name
}

let form = document.querySelector('form')
form.addEventListener('submit', e =>{ 
    e.preventDefault()
    console.log(form[0].value)
})
