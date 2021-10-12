import { from, of } from "rxjs"

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

/**
 * Primer ejercicio: diferencia entre from y of
 */
// const source$ = from ([1,2,3,4,5]);
// const source$ = of ([1,2,3,4,5]);
// const source$ = of (...[1,2,3,4,5]);

const source$ = from ('alba'); // Se muestra cada una de las letras
source$.subscribe(observer);

/**
 * Segundo ejercicio: utilizar from con peticiones fetch (aunque rxjs tiene una opción para trabajar con peticiones ajax basadas en observables)
 */

const sourceFetch$ = from(fetch('https://api.github.com/users/klerith'));
sourceFetch$.subscribe( async (resp) => {
    console.log(resp);

    const dataResp = await resp.json();
    console.log(dataResp);
});

/**
 * Tercer ejercicio: from con funciones generadoras o iterables en javascript.
 */

// Función generadora
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer);