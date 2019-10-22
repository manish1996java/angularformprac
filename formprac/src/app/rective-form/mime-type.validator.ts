import { AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs';

export const mimeType = (control: AbstractControlDirective): Promise<{[key:string]:any}> | Observable<{[key:string]:any}> =>{
    const file = control.value as File;
    const fileReader = new FileReader();
    const frObs = Observable.create((obs:Observable<{[key:string]:any}>)=>{
        fileReader.addEventListener("loadend",()=>{
            const arr = new Uint8Array
        });
        fileReader.readAsArrayBuffer(file);
    })

    fileReader.onloadend = () => {}  
}