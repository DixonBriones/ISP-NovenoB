import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  mostrarTutor() {
    return this.http.get(`${this.URL}/tutor`);
  }

}
