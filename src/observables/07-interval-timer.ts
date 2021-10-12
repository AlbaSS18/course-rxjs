import { interval, timer } from "rxjs"

const observer = {
    next: (value) => console.log('next', value),
    complete: () => console.log('complete')
}

// Tanto interval como timer son asíncronos

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000); // Nunca se va a completar

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); // Con esta instrucción creo un interval que empieza a los dos segundos y se ejecuta cada segundo. Nunca se completa
const timer$ = timer(hoyEn5); // Se le puede pasar una fecha

console.log("Inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");

