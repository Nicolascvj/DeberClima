const colors=require('colors');
const yargs = require('yargs');
const { demand } = require('yargs');
const clima = require('./controlador/clima.js');


const argv = require('yargs').options({
ciudad:{
    alias: 'c',
    desc: 'Nombre de la ciudad para obtener el clima',
    demand: true
}
}).argv;

let ciudad= argv.ciudad

/* Imprime promesa
const temp=clima.getClima(ciudad);

console.log(`El clima de ${ciudad} es de ${temp}`);
*/
const getdatos=async(ciudad) =>{
    try {
        const datos=await clima.getClima(ciudad);

const mensaje=`El temperatura de ${ciudad.magenta} es: ${datos.temperatura.toString().cyan} \nLa humedad de ${ciudad.magenta} es: ${datos.humedad.toString().cyan} \nLa presion de ${ciudad.magenta} es de: ${datos.presion.toString().cyan} `;

        if (datos.estadoclima=='clear sky'){
            return(mensaje+`\nEl estado del clima es: ${datos.estadoclima}`.blue);
        }
        if (datos.estadoclima=='mist'){
        return(mensaje+`\nEl estado del clima es: ${datos.estadoclima}`.yellow);
        }
        if (datos.estadoclima=='broken clouds'){
            return(mensaje+`\nEl estado del clima es: ${datos.estadoclima}`.gray);
            }
        if (datos.estadoclima=='few clouds'){
            return(mensaje+`\nEl estado del clima es: ${datos.estadoclima}`.green);
            }
                
    } catch (error) {
        return(`No se encontro datos de ${ciudad}`.red);
    }
}
getdatos(ciudad).then(console.log)
.catch(console.log)

//console.log(colors.trap('Run the trap'));
/*

clima.getClima(ciudad)
.then(respuesta=>{
console.log(`El clima de ${ciudad} es de ${respuesta}`);
}).catch(err=>{
    console.log(err);
});
*/

//Tarea:
//1. Modificar el codigo para obtener un error coherente //
//2. Cambiar para que nos muestre la temp en grados centigrados ///
//3. Mostrar los demas datos del clima y utilizar colores //
//  3.1 Si es nublado, un color; soleado, otro color, etc. 
// 4. Subir el codigo a github
