
// Declaramos un arreglo para almacenar los amigos
let amigos = [];
// Arreglo para almacenar los amigos sorteados
let amigosSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el valor del campo de entrada
    const amigoInput = document.getElementById("amigo");
    const nombreAmigo = amigoInput.value.trim();

    // Verificamos que el campo no esté vacío
    if (nombreAmigo !== "") {
        // Añadimos el nuevo amigo al arreglo
        amigos.push(nombreAmigo);

        // Limpiamos el campo de entrada
        amigoInput.value = "";

        // Mostramos el listado de amigos actualizados
        mostrarAmigos();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiamos la lista actual
    listaAmigos.innerHTML = "";

    // Añadimos cada amigo como un ítem de lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer el sorteo.");
        return;
    }

    // Filtramos los amigos que ya han sido sorteados
    const amigosDisponibles = amigos.filter(amigo => !amigosSorteados.includes(amigo));

    if (amigosDisponibles.length === 0) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    }

    // Hacemos un sorteo aleatorio de los amigos disponibles
    const amigoSorteado = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];

    // Mostramos el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;

    // Añadimos el amigo sorteado al arreglo de amigos sorteados
    amigosSorteados.push(amigoSorteado);

    // Opcional: si deseas eliminar el amigo de la lista para que no pueda ser sorteado nuevamente
    amigos = amigos.filter(amigo => amigo !== amigoSorteado);

    // Mostramos la lista actualizada de amigos
    mostrarAmigos();
}

















