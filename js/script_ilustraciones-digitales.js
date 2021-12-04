function foto(nombre, titulo, subtitulo, link) {
    this.nombre = nombre;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.link = link;
}

let listaFotos = []


listaFotos.push(new foto('lirio.png', 'Lirio', 'Digtal', '#'));
listaFotos.push(new foto('naranjo.png', 'Naranjo', 'Digtal', '#'));
//...
addPhotosToList('ilustracion-digital', listaFotos)

listaFotos = []
listaFotos.push(new foto('magnolia.png', 'Magnolia', 'Digtal', '#'));
listaFotos.push(new foto('lirio.png', 'Lirio', 'Digtal', '#'));
listaFotos.push(new foto('naranjo.png', 'Naranjo', 'Digtal', '#'));
//....
addPhotosToList('pegatinas', listaFotos)


listaFotos = []
listaFotos.push(new foto('magnolia.png', 'Magnolia', 'Digtal', '#'));
listaFotos.push(new foto('lirio.png', 'Lirio', 'Digtal', '#'));
listaFotos.push(new foto('naranjo.png', 'Naranjo', 'Digtal', '#'));
//....
addPhotosToList('pegatinas', listaFotos)



const imageslist = ['boletus.png', 'calabazas.png',
    'camp_margarites.png', 'fresh.png', 'lago.png',
    'lirio.png', 'magnolia.png', 'muntanyes.png',
    'naranjo.png', 'verano.png']



/* */


function addPhotosToList(listName, listaFotos) {
    if (document.getElementById(listName) != undefined)
        listaFotos.forEach(function (photo) {
            document.getElementById(listName).innerHTML +=
                '<li class="grid-item">' +
                '<img src="img/ilustracion_digial/' + photo.nombre + '">' +
                '<a class="ajax-link" href="' + photo.link + '">' +
                '<div class="grid-hover">' +
                '<h1>' + photo.titulo + '</h1>' +
                '<p>' + photo.subtitulo + '</p>' +
                '</div>' +
                '</a></li>;'
        });
}