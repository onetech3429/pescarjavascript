
        /* EJERCICIO # 3   (PROMESAS)*/
        let promesa = new Promise((resolve, reject) => {
            console.log('Estamos haciendo algo...')
            var x = 5
            if(x < 10){
                throw new Error('Ups el número es muy chico')
            }
            resolve()
            console.log('Estamos terminando algo')
        })
        promesa.then(() => {
            console.log('Lo hiciste bien...')
        }).catch((rta) => {
            console.log(rta)
        })
        try{
            //contenido
        }catch(error){
            //mostrar algo
        }/* finally{
            //mostrar, listo fuiste atendido 
        } */



        /* EJERCICIO # 2 */
        /* function ejecutarOver(e){
            e.preventDefault()            
        }
        function ejecutarStart(e){
            //e.preventDefault()
            e.dataTransfer.setData('text', e.target.id)            
        }
        function ejecutarDrop(e){
            e.preventDefault()
            var data = e.dataTransfer.getData('text')
            console.log(data)
            console.log(e.target)
            e.target.appendChild(document.getElementById(data))
        } */


        /* EJERCICIO # 1 */
       /*  var input = document.querySelector('input[type=file]')
        var vistaPrevia = document.querySelector('#vistaPrevia')
        input.addEventListener('change', (e) => {
            console.log(e.target.files[0].name)
            let url = URL.createObjectURL(e.target.files[0])
            vistaPrevia.setAttribute('src', url)
        }) */
        /* EJERCICIO # 1.1 */
        /* let caja = document.getElementById('caja')
        caja.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        caja.addEventListener('drop', (e) => {
            e.preventDefault()
            //console.log(e)
            var archivo = new FileReader()
            archivo.addEventListener('load', (e) => {
                console.log(e.target.result)
                caja.style.backgroundImage = 'url("' + e.target.result + '")'
            })
            
            archivo.readAsDataURL(e.dataTransfer.files[0])
        }) */
    