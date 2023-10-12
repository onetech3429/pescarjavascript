var campos = {
    nombre: false,
    correo: false
}

let form = document.getElementById('form')
let inputs = document.querySelectorAll('input')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (campos[nombre] && campos[correo]) {
        console.log('Datos enviados')
        document.querySelector('#p-submit').classList.add('p-submit-enviado')
    } else {
        console.log('Datos no enviados')
        document.querySelector('#p-submit-error').classList.add('p-submiterror')
    }
})
