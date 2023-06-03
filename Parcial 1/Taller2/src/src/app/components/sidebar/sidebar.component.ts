import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sideNavStatus: boolean= false;
  list=[
    {
      number:'1',
      name:'Noticias',
      icon:'fa-solid fa-newspaper',
      route:'/noticia'
    },
    {
      number:'2',
      name:'Transparencia',
      icon:'fa-solid fa-file',
      route:'/transparencia'
    },
    {
      number:'2',
      name:'Postulaciones',
      icon:'fa-solid fa-message',
      route:'/voluntario'
    },
    {
      number:'3',
      name:'Opiniones',
      icon:'fa-solid fa-comments',
      route:'/opinion'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
