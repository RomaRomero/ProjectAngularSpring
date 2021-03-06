import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private baseUrl = 'http://localhost:9898/api/v1/usuario/';

    constructor(private http: HttpClient) { }

    getUsuario(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createUsuario(usuario: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, usuario);
    }

    updateUsuario(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteUsuario(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    getUsuarioList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}