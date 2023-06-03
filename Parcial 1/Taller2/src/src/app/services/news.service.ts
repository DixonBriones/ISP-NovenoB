import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private URL = environment.rutaservice;

  constructor(private http: HttpClient) {}

  mostrarNews(query=''){
    return this.http.get(`${this.URL}/news`,{params:{q:query}});
  }

  insertNews(body:FormData) {
    return this.http.post(`${this.URL}/news`,body);
  }

  deleteNews(id:any){
    return this.http.delete(`${this.URL}/news/${id}`);
  }


  findNews(id:any){
    return this.http.get(`${this.URL}/news/${id}`);
  }

  updateNews(id:any,body:FormData){
    return this.http.post(`${this.URL}/news/${id}`,body);
  }


}