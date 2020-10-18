import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MascotaService {
    private baseUrl = 'http://localhost:9898/api/v1/mascota/';

    constructor(private http: HttpClient) { }

    getMascota(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createMascota(mascota: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, mascota);
    }

    updateMacota(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteMascota(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    getMascotaList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}