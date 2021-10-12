import { asyncScheduler, observeOn, of, range } from "rxjs";

const scr$ = range(1, 5).pipe(
    observeOn(asyncScheduler)
);

console.log('inicio');
scr$.subscribe(console.log);
console.log('fin');