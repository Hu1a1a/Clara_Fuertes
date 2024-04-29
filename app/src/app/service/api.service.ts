import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) { }
    private options = ({ headers: new HttpHeaders({ 'Content-Type': 'application/json' }), });
    setHeader(token: string) { this.options = ({ headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }) }) }
    UrlApi: string = environment.URL_API

    async Login(User: string, Password: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}login/`, { User, Password }, this.options));
    }
    async Token(): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}token/`, this.options));
    }
    async SendEmail(Email: string, Name: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}email/ensalada/`, { Email, Name }, this.options));
    }

    async GetCurso(router: string): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}curso/${router}/`, this.options));
    }
    async AccionCurso(data: any, router: string, accion: "create" | "update" | "delete"): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}curso/${accion}/${router}/`, { data }, this.options));
    }
}