import { of } from "rxjs";

//const obs$ = of(1, 2, 3, 4, 5, 6); // Síncrono
const obs$ = of<number[]>(...[1, 2, 3, 4, 5, 6],2,3,4,5);
//const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

/*
Estas operaciones se realizan de forma asíncrona.
    - Inicio del Obs$
    - Valores del observable
    - Se completa
    - Fin del Obs$
*/
console.log("Inicio del Obs$");
obs$.subscribe(
    {
        next: (value) => console.log('next', value),
        complete: () => console.info('Terminamos la secuencia') // Especifica qué hacer en caso de que se complete el observable
    }
);
console.log("Fin del Obs$");