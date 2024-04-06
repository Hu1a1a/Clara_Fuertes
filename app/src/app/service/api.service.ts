import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) { }
    private options = ({ headers: new HttpHeaders({ 'Content-Type': 'application/json' }), });

    UrlApi: string = "http://localhost:3000/api/"

    async Login(User: string, Password: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}curso/login`, { User, Password }, this.options));
    }
    async SendEmail(Email: string, Name: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}email/ensalada`, { Email, Name }, this.options));
    }

} 