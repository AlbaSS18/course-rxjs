import { Observable } from "rxjs";

//const obs$ = Observable.create(); Another way. Not recommended.

const obs$ = new Observable<string>(subs => {
    
    subs.next('Hola'); // Next emite el valor entre paréntesis.

    subs.complete(); // Ninguna emisión posterior va a ser notificada a sus subscriptores.
});

obs$.subscribe(console.log); // Subscripciones





