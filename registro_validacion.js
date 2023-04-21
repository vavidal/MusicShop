//Crear una constante llamada formulario
const formulario = document.getElementById('formulario_feliz');
//Arreglo con todos los inputs del formulario
const inputs = document.querySelectorAll('#formulario_feliz input');
//EXPRESIONES PARA LAS VÁLIDACIONES
const expresiones = {
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^[a-z0-9]{6,14}$/,
    nombre:/^[a-zA-Z]{3,10}$/,
    apellido:/^[a-zA-Z]{3,10}$/,
    correo:/^[a-z0-9_.+-]+@+[a-z]+\.[a-z]+$/,
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case"nombre":
        if(expresiones.nombre.test(e.target.value)){
           // alert("Nombre válido")
        }else{
            alert("No se aceptan símbolos o número para el nombre")
        }
        break;
        case"apellido":
        if(expresiones.apellido.test(e.target.value)){
           // alert("Apellido válido")
        }else{
            alert("No ingrese símbolos o número en el apellido")
        }
        break;
        case"run":
           // console.log('c')
        break;
        case"correo":
        if(expresiones.correo.test(e.target.value)){
           // alert("Correo ingresado correctamente");
        }else{
            alert("Email inválido")
        }
        break;
        case"usuario":
            if(expresiones.usuario.test(e.target.value)){
            //    alert("Usario válido")
            }else{
               alert("el usuario debe contener por lo menos 4 caracteres")
            }
        break;
        case"password":
            if(expresiones.password.test(e.target.value)){
            //    alert("valido")
            }else{
                alert("La contraseña debe tener entre 6 a 14 caracteres y puede ser alfanumerica")
            
            }
        break;
        case"check":
            console.log('fsnd')
        break;
    }

}
inputs.forEach((input)=>{
   // input.addEventListener('keyup',validarFormulario); //soltar tecla
    input.addEventListener('blur',validarFormulario); //presionar fuera del input
    // console.log('Tecla levantada'); para ver si funciona
}
);
//Ejecutar función al hacer click en el botón de tipo submit
//e va a ser un parametro que sera un evento
formulario.addEventListener('submit',(e)=>{
    //preventDefaul es para que la página no envie o no haga nada
    e.preventDefault();
    
});



//documento cargado
$(document).ready(
    
   function(){
       $("#emailInput").focus(function(){
          console.log("foco en el campo realizado");
        })
    } 
    );
