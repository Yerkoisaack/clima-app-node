const axios = require('axios');

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d9640a871d7f30e7eca2d9a0d3f4fd66`);
    temperatura = respuesta.data.main.temp;
    return temperatura;
}


module.exports = {
    getClima
}