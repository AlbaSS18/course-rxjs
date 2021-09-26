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
    
    setTimeout(()=> {
        subscriber.complete();
    },2500);

    // Procedimiento que se ejecuta cuando se hace el unsubscribe
    return () => {
        clearInterval(interval); // Limpia el interval
        console.log('Intérvalo destruido');
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2)
subscription1.add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Completado timeout');
},6000);