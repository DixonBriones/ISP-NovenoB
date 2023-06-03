import { Component, OnInit } from '@angular/core';
import { OpinionService } from 'src/app/services/opinion.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {
  opinion: any = [];
  p: number = 1;
  query: string = '';
  constructor(private opinionService: OpinionService) { }

  ngOnInit(): void {
    this.listarOpinion();
  }

  public listarOpinion() {
    this.opinionService.mostrarOpinion(this.query.trim()).subscribe((res) => {
      this.opinion = res
    })
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarOpinion();
    }
  }

}
