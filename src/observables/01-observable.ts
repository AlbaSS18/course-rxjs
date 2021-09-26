import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]', value),
  error: err => console.warn('error [obs]:', err),
  complete: () => console.info('completado [obs]')
};

// const obs$ = Observable.create(); Another way. Not recommended.

const obs$ = new Observable<string>(subs => {
  subs.next('Hola'); // Next emite el valor entre paréntesis.
  subs.next('Mundo');

  // Forzar un error
  /* const a = undefined;
  a.nombre = 'Fernando'; */

  subs.complete() // Ninguna emisión posterior va a ser notificada a sus subscriptores.
})

obs$.subscribe(observer);

/* obs$.subscribe({
  next: (value) => console.log('next', value),
  error: (error) => console.warn('error', error), // Especifica qué hacer en caso de error
  complete: () => console.info('complete') // Especifica qué hacer en caso de que se complete el observable
}); // Subscripciones */