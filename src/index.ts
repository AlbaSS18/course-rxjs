import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: err => console.warn('error:', err),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    // Crear un contador, 1,2,3,4,5....
    let contador: number = 1;
    const interval = setInterval(() => {
        // Cada segundo
        subscriber.next(contador);
        contador++;
    }, 1000);
     
    // Procedimiento que se ejecuta cuando se hace el unsubscribe
    return () => {
        clearInterval(interval); // Limpia el interval
        console.log('Intérvalo destruido');
    }
});

const subscription1 = intervalo$.subscribe(num => console.log('Num', num));
const subscription2 = intervalo$.subscribe(num => console.log('Num', num));
const subscription3 = intervalo$.subscribe(num => console.log('Num', num));


setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();

    console.log('Completado timeout');
},3000);