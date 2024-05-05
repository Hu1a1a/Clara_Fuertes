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
    async PasswordReset(Email: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}resetPass/`, { Email }, this.options));
    }
    async PasswordReset2(email: string, token: string, password: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}resetPassword/`, { email, token, password }, this.options));
    }
    async Token(): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}token/`, this.options));
    }
    async SendEmail(Email: string, Name: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}email/ensalada/`, { Email, Name }, this.options));
    }
    async Get(router: string): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}${router}/`, this.options));
    }
    async Accion(data: any, router: string, accion: "create" | "update" | "delete"): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}${router}/${accion}/`, { data }, this.options));
    }
    async paySession(item: any): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}stripe/pay/`, item, this.options));
    }
    async checkSession(url: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}stripe/check/`, { url }, this.options));
    }
    async SendContacto(Email: string, Name: string, Msg: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}email/contacto/`, { Email, Name, Msg }, this.options));
    }
}