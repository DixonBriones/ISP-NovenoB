import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private URL = environment.rutaservice;

  constructor(private http: HttpClient) { }

  mostrarVolunteer(query = '') {
    return this.http.get(`${this.URL}/voluntario`, { params: { q: query } });
  }

  findVolunteer(id: any) {
    return this.http.get(`${this.URL}/voluntario/${id}`);
  }
}
