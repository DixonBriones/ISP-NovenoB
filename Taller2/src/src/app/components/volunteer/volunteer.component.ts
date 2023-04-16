import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  voluntter: any = [];
  p: number = 1;
  query: string = '';
  constructor(private volunteerService: VolunteerService) { }

  ngOnInit(): void {
    this.listarVolunteer();
  }

  public listarVolunteer() {
    this.volunteerService.mostrarVolunteer(this.query.trim()).subscribe((res) => {
      this.voluntter = res
    })
  }

  public listar(evn: any) {
    const key = evn.charCode;
    if (key == 13) {
      this.listarVolunteer();
    }
  }

}
