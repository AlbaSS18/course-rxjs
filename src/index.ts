import { Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    error: err => console.warn('error [obs]:', err),
    complete: () => console.info('completado [obs]')
};