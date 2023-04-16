import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {
  id: any;
  datos: any = {};

  urlBachelor = '';
  urlCurriculum = '';
  urlAntecedentes = '';
  urlBaja = '';
  urlCovid = '';
  urlConadis = '';

  constructor(private route: ActivatedRoute,
    private volunteerService: VolunteerService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mostrarvoluntarioId(this.id);
  }

  mostrarvoluntarioId(id: any) {
    this.volunteerService.findVolunteer(id).subscribe((res) => {
      this.datos = res
      this.urlBachelor = environment.rutaStorage + '/volunteer/certified_bachelor/' + this.datos.certified_bachelor;
      this.urlCurriculum = environment.rutaStorage + '/volunteer/curriculum/' + this.datos.curriculum;
      this.urlAntecedentes = environment.rutaStorage + '/volunteer/criminal_record/' + this.datos.criminal_record;
      this.urlBaja = environment.rutaStorage + '/volunteer/institutional_expulsion_file/' + this.datos.institutional_expulsion_file;
      this.urlCovid = environment.rutaStorage + '/volunteer/covid_vaccination_file/' + this.datos.covid_vaccination_file;
      this.urlConadis = environment.rutaStorage + '/volunteer/conadis_file/' + this.datos.conadis_file;
    });
  }


}
