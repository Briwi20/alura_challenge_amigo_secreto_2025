// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres de amigos
let amigos = [];

//Funciona para agregar un amigo
//Funcion para agregar un amigo
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
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra el input previo en el contenedor de la lista

    //Recorrer el array con un ciclo for
    for (let i =0; i <amigos.length; i++){
       const li = document.createElement ('li');
       li.textContent = amigos[i];
       listaAmigos.appendChild(li);
    }

}


//Funcion para seleccionar un amigo aleatorio