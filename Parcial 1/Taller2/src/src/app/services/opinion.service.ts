import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  private URL = environment.rutaservice;

  constructor(private http: HttpClient) { }

  mostrarOpinion(query = '') {
    return this.http.get(`${this.URL}/opinion`, { params: { q: query } });
  }

  findOpinion(id: any) {
    return this.http.get(`${this.URL}/opinion/${id}`);
  }
}
