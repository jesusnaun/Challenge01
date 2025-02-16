// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let numeroMaximo = 5;



//Añade nombre a la lista de Amigos
function agregarAmigo(){
    //Valida que el nombre no esté en blanco
    if (document.getElementById("amigo").value == ""){
    alert("El nombre del amigo(a) no puede estar en blanco");
    limpiaFoco();
    
}
else{
    //Valida que no se repita
    if (validaRepetido()){
        limpiaFoco();
        alert("El nombre del amigo(a) no se puede repetir");
        }
    else{
        //Agregra el amigo a la lista
        listaDeAmigos.push(document.getElementById("amigo").value);
        //Habilita el botón de Sorteo
        document.getElementById("idSortearAmigo").removeAttribute("disabled");
        //Muestra la lista de amigos
        asignarTextoElemento("listaAmigos",listaDeAmigos);
        limpiaFoco();
            //Verifica la cantidad de amigos añadidos
            if (listaDeAmigos.length == numeroMaximo){
                deshabilitaTextoAñadir(`El programa acepta un máximo de ${numeroMaximo} de personas`);
                deshabilitaBotonAñadir();                
            }
        }
    }
}

//Ejecuta el proceso de seleccionar un nombre aleatorio
function sortearAmigo(){
    if (listaDeAmigos.length > 0){
        let amigoSecreto = listaDeAmigos[obtenerIndiceAleatorio(listaDeAmigos.length)];
        limpiarElemento("listaAmigos");
        listaDeAmigos = [];
        asignarTextoElemento("idSortearAmigo","Reiniciar juego");
        asignarTextoElemento("resultado", `El amigo secreto es: ${amigoSecreto}`);
        deshabilitaTextoAñadir("Gracias por jugar");
        deshabilitaBotonAñadir();                        
    }
    else{
        //Actualiza página
        location.reload();
    }
   
}

 
//Obtener un entero aleatorio desde 0 hasta la cantidad máxima de la lista - 1
function obtenerIndiceAleatorio(max) {
    return Math.floor(Math.random() * max);
  }

 //Verifica que no se repitan los nombres 
 function validaRepetido(){
    let repetido = false;
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (listaDeAmigos[i].toUpperCase() == document.getElementById("amigo").value.toUpperCase()){
            repetido = true;
        }
    }
    return repetido;
 }

//Limpia la caja de texto y establece el cursor
 function limpiaFoco(){
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus(); 
}

//Deshabilita el botón Añadir
 function deshabilitaBotonAñadir(){
    document.getElementById("agregarAmigo").disabled = true;
 }

 //Deshabilita la caja de texto y establece un mensaje en el placeholder
 function deshabilitaTextoAñadir(mensaje){
    document.getElementById("amigo").disabled = true;
    document.getElementById("amigo").placeholder = mensaje;
 }

 //Asigna texto a un elemento html
 function asignarTextoElemento(elemento, texto)
 {
     let elementoHTML = document.getElementById(elemento)
     elementoHTML.innerHTML = String(texto).replaceAll(",","<br>");
     return;
 }

 //Limpia texto a un elemento html
 function limpiarElemento(elemento)
{
    let elementoHTML = document.getElementById(elemento)
    elementoHTML.innerHTML = "";
    return;
}