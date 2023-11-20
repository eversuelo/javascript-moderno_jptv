const reproductor = {
    reproducir: (id) => console.log(`Reproduciendo cancon con el id ${id}`),
    pausar: () => console.log("Pausando.."),
    crearPlaylist: (nombre) => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: (nombre) =>
        console.log(`Reproduciendo la playlist de ${nombre}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    },
};
reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function(id) {
    console.log(`Borrando cancion con el id ${id}`);
};
reproductor.borrar(30);
reproductor.crearPlaylist("Psycodelic");
reproductor.reproducirPlaylist("Psycodelic");