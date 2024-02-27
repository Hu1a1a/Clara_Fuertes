import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})

export class ApiService {
    GuiaEnsalada(name: string, email: string) {
        //funcion de mailing al back
        console.log(name, email)
    }
    AyudaMsg(name: string, email: string, type: string) {
        //funcion de mailing al back
        console.log(name, email, type)
    }
} 