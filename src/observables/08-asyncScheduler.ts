import { asyncScheduler } from "rxjs";


/* 
Con el asyncScheduler puedes realizar estas dos funciones.
    - setTimeout(()=> {},3000);
    - setInterval(() => {}, 3000) 

Es asíncrono.
Devuelve un subscription.
*/

const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre.a} ${nombre.apellido}`);
//  
/**
 * SET TIMEOUT
 */

/**
 * Schedule
 *      - Primer parámetro (work): función que queremos ejecutar
 *      - Segundo parámetro (delay): cantidad de tiempo que nosotros queremos ejecutar
 *      - Tercer parámetro (state): mandas el estado del schedule. Solo se puede mandar uno
 *        Para mandar más de un argumento, lo mejor es utilizar un objeto.
 */

// EJEMPLOS
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Alba'); // Con parámetros
asyncScheduler.schedule(saludar2, 2000, {a: 'Alba', apellido: 'Serena'});

/**
 * SET INTERVAL
 */

/**
 * Schedule
 *      - Primer parámetro (work): en este caso, no puede ser una función lamda sino que debe ser una función normal que reciba un state
 *      - Segundo parámetro (delay): intérvalo de tiempo en el cual se quiere que la función se empiece a ejecutar
 *      - Tercer parámetro (state): Solo se puede mandar uno. Para mandar más de un argumento, lo mejor es utilizar un objeto.
 */

const subs = asyncScheduler.schedule(function(state){
    console.log('State', state);

    // Para que se siga ejecutando como setInterval, tienes que volver a llamar a la función
    this.schedule(state+1, 1000);
}, 3000, 0);

// CANCELAR LA SUBSCRIPCIÓN

// Primera forma: 
/* setTimeout(()=> {
    subs.unsubscribe();
}, 6000); */

// Segunda forma:
asyncScheduler.schedule(() => subs.unsubscribe(), 6000)