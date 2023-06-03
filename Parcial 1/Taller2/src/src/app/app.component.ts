import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //authService:boolean=true;
  title = 'Bomberos Manta';
  sideNavStatus: boolean= true;
  constructor(public authService: AuthService) {}
}
