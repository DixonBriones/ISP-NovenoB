import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpinionService } from 'src/app/services/opinion.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-opinion-details',
  templateUrl: './opinion-details.component.html',
  styleUrls: ['./opinion-details.component.scss']
})
export class OpinionDetailsComponent implements OnInit {
  id: any;
  datos: any = {};

  constructor(private route: ActivatedRoute,
    private opinionService: OpinionService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mostrarvoluntarioId(this.id);
  }

  mostrarvoluntarioId(id: any) {
    this.opinionService.findOpinion(id).subscribe((res) => {
      this.datos = res
    });
  }

}
