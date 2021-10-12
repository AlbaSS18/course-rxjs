import { asyncScheduler, observeOn, of, range } from "rxjs";

// Es síncrono pero se puede convertir en asíncrono con asyncScheduler

const scr$ = range(1, 5).pipe(
    observeOn(asyncScheduler)
);

console.log('inicio');
scr$.subscribe(console.log);
console.log('fin');