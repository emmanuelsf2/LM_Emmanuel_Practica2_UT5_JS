document.addEventListener("DOMContentLoaded", () => {
    loadLDocA("mensajes.txt");
});

function gestionarFicheroTXT(texto) {
    const mensajes = texto.split("\n");
    const main = document.querySelector("main");
    let cadena = "";

    mensajes.forEach((mensaje, index) => {
        const clase = index % 2 === 0 ? "mensaje-izquierda" : "mensaje-derecha";
        cadena += `<div class="${clase}">${mensaje}</div>`;
    });

    main.innerHTML = cadena;
}