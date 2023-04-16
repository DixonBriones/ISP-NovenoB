import { Component, OnInit } from '@angular/core';
import { TransparencyService } from 'src/app/services/transparency.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-transparency',
  templateUrl: './transparency.component.html',
  styleUrls: ['./transparency.component.scss']
})
export class TransparencyComponent implements OnInit {
  @ViewChild('closeModal')closebutton:any;
  @ViewChild('closeModal2')closebutton2:any;
  p: number = 1;
  transparency:any=[];
  fileTmp:any=null;
  datos:any={};
  totalItems:any;
  transparencyForm:FormGroup;
  transparencyFormUpdate:FormGroup;
  query:string='';
  user:number=1;
  urlfile="http://localhost:8000/storage/transparency/";
  constructor(private formBuilder:FormBuilder,
    private transparencyService:TransparencyService) 
    {
      this.transparencyForm=this.formBuilder.group({
        title:[null,{
          validators:[Validators.required]
        }],
        category:[null,{
          validators:[Validators.required]
        }],
        fiscalyear:[null,{
          validators:[Validators.required]
        }],
        file:[null,{
          validators:[Validators.required]
        }]
      })

      this.transparencyFormUpdate=this.formBuilder.group({
        titleUpdate:[null,{
          validators:[Validators.required]
        }],
        categoryUpdate:[null,{
          validators:[Validators.required]
        }],
        fiscalyearUpdate:[null,{
          validators:[Validators.required]
        }],
      })
    
    }


  ngOnInit(): void {
    this.ListarTransparencia();
    
  }

  ListarTransparencia() {
    this.transparencyService.showTransparency(this.query).subscribe((res)=>{
      this.transparency=res;
    })
  }

  GuardarTrasparecia(){
    const body = new FormData();
    body.append('title',this.transparencyForm.get('title')?.value);
    body.append('category',this.transparencyForm.get('category')?.value);
    body.append('fiscalyear',this.transparencyForm.get('fiscalyear')?.value);
    body.append('user_id',this.user.toString());
    body.append('file',this.fileTmp.fileRaw);
    this.transparencyService.insertTransparency(body).subscribe((res)=>{
      this.transparencyForm.reset();
      this.closebutton.nativeElement.click()
      this.ListarTransparencia();
    });
    
  }

  EliminarTransparencia(id:any){
    this.transparencyService.deleteTransparency(id).subscribe((res)=>{
      this.ListarTransparencia();
    })
  }

  MostrarTransparenciaId(id:any){
    this.transparencyService.findTransparency(id).subscribe((res)=>{
      this.datos=res
      this.transparencyFormUpdate=this.formBuilder.group({
        titleUpdate:[this.datos.title],
        categoryUpdate:[this.datos.category],
        fiscalyearUpdate:[this.datos.fiscalyear],
      })
      
    })
  }
  

  ActualizarTransparencia(id:any){
    const body = new FormData();
    body.append('title',this.transparencyFormUpdate.get('titleUpdate')?.value);
    body.append('category',this.transparencyFormUpdate.get('categoryUpdate')?.value);
    body.append('fiscalyear',this.transparencyFormUpdate.get('fiscalyearUpdate')?.value);
    
    this.transparencyService.updateTransparency(id,body).subscribe((res)=>{
      this.transparencyFormUpdate.reset();
      this.closebutton2.nativeElement.click()
      this.ListarTransparencia();
    })
  }

  getFile($event:any){
    const[file]=$event.target.files
    this.fileTmp= {
      fileRaw:file,
      fileName:file.name
    }
  }



}
