//Crear una constante llamada formulario
const formulario = document.getElementById('formulario_2');
//Arreglo con todos los inputs del formulario
const inputs = document.querySelectorAll('#formulario_2 input');
//EXPRESIONES PARA LAS VÁLIDACIONES
const expresiones = {
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^[a-z0-9]{6,14}$/,
    correo:/^[a-z0-9_.+-]+@+[a-z]+\.[a-z]+$/,
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case"correouser":
        if(expresiones.correo.test(e.target.value)||expresiones.usuario.test(e.target.value)){
           // alert("Correo ingresado correctamente");
        }else{
            alert("Email o usuario inválido")
        }
        break;
        case"password":
            if(expresiones.password.test(e.target.value)){
            //    alert("valido")
            }else{
                alert("La contraseña debe tener entre 6 a 14 caracteres y puede ser alfanumerica")
            
            }
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