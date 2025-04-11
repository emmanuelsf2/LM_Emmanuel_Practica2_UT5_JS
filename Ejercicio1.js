document.addEventListener("DOMContentLoaded", () => {
    loadLDocA("libros.xml");
});

function gestionarFicheroXML(xml) {
    let librerias = xml.querySelectorAll("libreria")
    let libros = xml.querySelectorAll("libro")
    let main = document.querySelector("main");
    let cadena = "";

    for (let lib of librerias) {
        cadena += `<h2>${lib.querySelector("nombre").textContent}</h2>`;

        cadena += `<table class="tabla-libros">`;
        cadena += `
            <tr>
                <th>ISBN</th>
                <th>Título</th>
                <th>Nivel</th>
                <th>Autor</th>
                <th>Editorial</th>
                <th>Fecha</th>
                <th>Web</th>
                <th>Precio</th>
            </tr>
        `;

        for(let libro of libros) {
            let isbn = libro.querySelector("ISBN").textContent;
            let titulo = libro.querySelector("titulo").textContent;
            let nivel = libro.querySelector("nivelProfundidad").textContent;
            let autor = libro.querySelector("autor").textContent;
            let editorial = libro.querySelector("editorial").textContent;
            let fecha = libro.querySelector("fechaPublicacion").textContent;
            let web = libro.querySelector("paginaWeb").textContent;
            let precio = libro.querySelector("precio").textContent;

            cadena += `
                <tr>
                    <td>${isbn}</td>
                    <td>${titulo}</td>
                    <td>${nivel}</td>
                    <td>${autor}</td>
                    <td>${editorial}</td>
                    <td>${fecha}</td>
                    <td><a href="http://${web}" target="_blank">${web}</a></td>
                    <td>${precio} €</td>
                </tr>
            `;
        }
        cadena += "</table>";
    }
    main.innerHTML = cadena;
}