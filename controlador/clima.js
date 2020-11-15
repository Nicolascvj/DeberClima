const axios = require('axios');

const apiKey= 'e02ef3cca76db6fcafbc7679c9d4a0df'
/*
const getClima = async(ciudad)=>{
    try{
const ciudadURI= encodeURI(ciudad);        
const respuesta= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}&units=metric`)
return respuesta.data.main.temp;
}catch(error){
        console.log(error);
    }
    
}
*/



const getClima = async(ciudad)=>{
const ciudadURI= encodeURI(ciudad);        
const respuesta= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}&units=metric`)
//console.log(respuesta.data);
const estadoclima=respuesta.data.weather[0].description;
const masdatos=respuesta.data.main;
//console.log(estadoclima);
const temperatura=masdatos.temp;
const humedad=masdatos.humidity;
const presion=masdatos.pressure;

return {temperatura,humedad,presion,estadoclima};

}

module.exports={
    getClima
}
