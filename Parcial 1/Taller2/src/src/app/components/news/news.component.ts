import { Component, OnInit } from '@angular/core';
import {NewsService} from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news:any=[];
  p: number = 1;
  query:string='';
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.ListarNews();
  }

  ListarNews() {
    this.newsService.mostrarNews(this.query).subscribe((res)=>{
      this.news=res
    })
  }

  EliminarNews(id:any){
    this.newsService.deleteNews(id).subscribe((res)=>{
      this.ListarNews();
    })
  }

}
