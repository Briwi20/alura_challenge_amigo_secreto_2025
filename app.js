// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres de amigos
let amigos = [];

//Funciona para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementsById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    //validar que el campo no este vacio
    if (nombre === ""){
        alert("Por favor, ingrese un nombre.");
        return; //Detiene la ejecucion de la funcion
    }

    //Validar que el nombre no este duplicado
    if (amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return
    }

    //agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.ariaValu = "";

    //Actualizar la listaen el HTML
    actualizarLista();

}



//Funcion para actualizar la lista de amigos en la interfaz



//Funcion para seleccionar un amigo aleatorio