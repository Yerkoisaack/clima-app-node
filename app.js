const lugar = require('./lugar/jugar');
const tempe = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(respuesta => {
        console.log(`en la ciudad de: ${respuesta.direccion}`);
        // console.log(`la latirud es: ${respuesta.lat}`);
        // console.log(`la longitud es: ${respuesta.lng}`);
        tempe.getClima(respuesta.lat, respuesta.lng)
            .then(temp => console.log("hay ", temp, " grados"))
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));