import { Component, OnInit } from '@angular/core';
import {NewsService} from 'src/app/services/news.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {
  id:any;
  newsForm:FormGroup;
  user:number=1;
  imagesVar:string[]=[];
  imagenes:any=[];
  datos:any={};
  constructor(private formBuilder:FormBuilder,
    private newsService:NewsService,
    private router:Router,
    private route:ActivatedRoute,) { 
    this.id=this.route.snapshot.params['id'];
    this.newsForm=this.formBuilder.group({
      title:[null,{
        validators:[Validators.required]
      }],
      datePublish:[null,{
        validators:[Validators.required]
      }],
      content:[null,{
        validators:[Validators.required]
      }],
      images: [null,{
        validators:[Validators.required]
      }]
    })
  }

  ngOnInit(): void {
    this.busquedaid();
  }

  busquedaid(){
    if(this.id!=null){
      this.newsService.findNews(this.id).subscribe((res)=>{
        this.datos=res
        this.newsForm=this.formBuilder.group({
          title:[this.datos.title],
          datePublish:[this.datos.datePublish],
          content:[this.datos.content],
        })
        
      })
    }
  }

  guardarNoticia(){
    
    const body = new FormData();
    body.append('title',this.newsForm.get('title')?.value);
    body.append('content',this.newsForm.get('content')?.value);
    body.append('datePublish',this.newsForm.get('datePublish')?.value);
    body.append('user_id',this.user.toString());
    for(var i=0;i< this.imagenes.length;i++){
      body.append('images[]',this.imagenes[i]);
    }
    
    this.newsService.insertNews(body).subscribe((res)=>{
      this.newsForm.reset();
      this.imagesVar=[]
      this.router.navigate(['noticia']);
    });
  
  }


  actualizarNews(id:any){
    const body = new FormData();
    body.append('title',this.newsForm.get('title')?.value);
    body.append('content',this.newsForm.get('content')?.value);
    body.append('datePublish',this.newsForm.get('datePublish')?.value);
    for(var i=0;i< this.imagenes.length;i++){
      body.append('images[]',this.imagenes[i]);
    }
    
    this.newsService.updateNews(id,body).subscribe((res)=>{
      this.newsForm.reset();
      this.imagesVar=[]
      this.router.navigate(['noticia']);
    })
  }

  onFileChange(event:any) {
    this.imagesVar=[]
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
          var file=event.target.files[i];
          this.imagenes.push(file)
          var reader = new FileReader();
          reader.onload = (event:any) => {
            this.imagesVar.push(event.target.result); 
          }
          reader.readAsDataURL(event.target.files[i]);
        }
    }
  }


}
