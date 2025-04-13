function cargarLinks() {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    const listado = document.getElementById("listado");
    listado.innerHTML = "";
    links.forEach(link => {
        const item = document.createElement("li");
        item.innerHTML = `<a href="${link.url}" target="_blank">${link.titulo}</a> <button onclick="eliminarLink('${link.titulo}')">Eliminar</button>`;
        listado.appendChild(item);
    });
}
function agregarLink() {
    const titulo = document.getElementById("titulo").value;
    const url = document.getElementById("url").value;

    const links = JSON.parse(localStorage.getItem("links")) || [];
    links.push({ titulo, url });
    localStorage.setItem("links", JSON.stringify(links));

    cargarLinks();
}

function eliminarLink(titulo) {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links = links.filter(link => link.titulo !== titulo);
    localStorage.setItem("links", JSON.stringify(links));

    cargarLinks();
}

cargarLinks();