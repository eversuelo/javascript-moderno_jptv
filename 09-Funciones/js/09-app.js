const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancon con el id ${id}`);
    },
    pausar: function() {
        console.log("Pausando..");
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist de ${nombre}`);
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