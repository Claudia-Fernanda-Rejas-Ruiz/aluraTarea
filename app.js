// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos=[];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Capturar el valor del campo

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (arrayAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    arrayAmigos.push(nombre); // Añadir al array

    input.value = ""; // Limpiar el campo de entrada

    actualizarLista(); // Actualizar la lista visualmente
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let amigo of arrayAmigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}