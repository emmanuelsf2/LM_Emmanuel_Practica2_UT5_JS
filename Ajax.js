function loadLDocA(fichero)
{
    let http = new XMLHttpRequest();
    http.open("GET", fichero, true);
    http.send();
    http.addEventListener('load', ()=> {
        if(http.status === 200) {
            if(fichero.split(".")[1] == "xml")
            {
                gestionarFicheroXML(http.responseXML)
            }
            else
            {
                gestionarFicheroTXT(http.responseText)
            }
    }})
}

loadLDocA("libros.xml")