import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: err => console.warn('error:', err),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subs => {
    
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log("intervalo destruido");
    }

});

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

// A continuación, hacemos que ambos subscriptores emitan el mismo valor a través del subject

/**
 * Caracterísiticas del Subject:
 *  1. Casteo múltiple.
 *  2. También es un observer.
 *  3. Next, error y complete.
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setTimeout(()=> {
    subject$.next(10);
    subject$.complete();
    // El subject nos permite transformar un "Cold observable" en "Hot observable".

    subscription.unsubscribe();
}, 3500);