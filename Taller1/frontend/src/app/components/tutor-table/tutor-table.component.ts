import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';


@Component({
  selector: 'app-tutor-table',
  templateUrl: './tutor-table.component.html',
  styleUrls: ['./tutor-table.component.scss']
})

export class TutorTableComponent implements OnInit {
  tutor: any = [];

  constructor(private tutorService: TutorService) { }

  ngOnInit(): void {
    this.listarVolunteer();
  }


  public listarVolunteer() {
    this.tutorService.mostrarTutor().subscribe((res) => {
      this.tutor = res
      console.log(this.tutor)
    })
  }
}
