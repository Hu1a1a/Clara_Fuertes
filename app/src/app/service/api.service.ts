import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient, private router: Router) { }
    private options = ({ headers: new HttpHeaders({ 'Content-Type': 'application/json' }), });
    setHeader(token: string) { this.options = ({ headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token }) }) }
    UrlApi: string = environment.URL_API
    SQL_Master: any
    SQL_Comment: any

    back() { this.router.navigate(['login']) }

    async Login(User: string, Password: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}login/`, { User, Password }, this.options))
    }

    async PasswordReset(Email: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}resetPass/`, { Email }, this.options));
    }

    async PasswordReset2(email: string, token: string, password: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}resetPassword/`, { email, token, password }, this.options));
    }

    async Token(): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}token/`, this.options))
            .then((data: any) => !data.ok ? this.back() : data)
    }

    async SendRecursos(Email: string, Name: string, Doc: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}email/recursos/`, { Email, Name, Doc }, this.options));
    }

    async Get(router: string): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}${router}/`, this.options))
            .then((data: any) => !data.ok ? this.back() : data)
    }

    async GetID(router: string, id: number): Promise<any> {
        return await firstValueFrom(this.http.get(`${this.UrlApi}${router}/id/` + id, this.options))
            .then((data: any) => !data.ok ? this.back() : data)
    }

    async Accion(data: any, router: string, accion: "create" | "update" | "delete"): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}${router}/${accion}/`, { data }, this.options));
    }

    async paySession(item: { StripeId: string }): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}stripe/pay/`, item, this.options));
    }

    async checkSession(url: string, CallBack: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}stripe/${CallBack}/check/`, { url, CallBack }, this.options));
    }

    async SendContacto(Email: string, Name: string, Msg: string, Title: string): Promise<any> {
        return await firstValueFrom(this.http.post(`${this.UrlApi}email/contacto/`, { Email, Name, Msg, Title }, this.options));
    }

    wsConnection() { return new WebSocket(environment.URL_API_SOCKET) }

}