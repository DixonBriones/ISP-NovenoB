import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled= new EventEmitter<boolean>();
  menuStatus: boolean= false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  SideNavToggle(){
    this.menuStatus= !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  cerrarsesion(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
