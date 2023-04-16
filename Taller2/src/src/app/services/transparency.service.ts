import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root',
})
export class TransparencyService {
  private URL = environment.rutaservice;

  constructor(private http: HttpClient) {}

    insertTransparency(body:FormData) {
      return this.http.post(`${this.URL}/transparencia`,body);
    }

    showTransparency(query=''){
      return this.http.get(`${this.URL}/transparencia`,{params:{q:query}});
    }

    findTransparency(id:any){
      return this.http.get(`${this.URL}/transparencia/${id}`);
    }

    deleteTransparency(id:any){
        return this.http.delete(`${this.URL}/transparencia/${id}`);
    }
    updateTransparency(id:any,body:FormData){
      return this.http.post(`${this.URL}/transparencia/${id}`,body);
    }

}