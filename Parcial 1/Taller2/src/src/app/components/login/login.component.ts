import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading: boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      email: [null, {
        validators: [Validators.required]
      }],
      password: [null, {
        validators: [Validators.required]
      }],
      sistema: ["cbmpage", {
        validators: [Validators.required]
      }]
    })
  }

  ngOnInit(): void {
  }

  singIn(): void {
    if (this.loginForm.get('email')?.value === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Cuerpo de Bomberos de Manta',
        text: `Ingrese email.`,
        timer: 3000,
        toast: true,
        position: 'bottom-end',
        timerProgressBar: true,
        showConfirmButton: false
      });
      return;
    }
    if (this.loginForm.get('password')?.value === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Cuerpo de Bomberos de Manta',
        text: `Ingrese contraseña.`,
        timer: 3000,
        toast: true,
        position: 'bottom-end',
        timerProgressBar: true,
        showConfirmButton: false
      });
      return;
    }

    const DOMINIO_CORREO = 'bomberosmanta.gob.ec';
    const email_split = this.loginForm.get('email')?.value.split('@');
    let email = this.loginForm.get('email')?.value;
    if (email_split.length == 1) {
      email = email_split[0] + '@' + DOMINIO_CORREO;
    }


    const body = new FormData();
    body.append('email', email);
    body.append('password', this.loginForm.get('password')?.value);
    body.append('sistema', this.loginForm.get('sistema')?.value);

    this.loading = true;
    this.authService.singin(body).subscribe({
      next: (res: any) => {
        this.loading = false;
        localStorage.setItem('token', res.data);
        this.router.navigate(['/', 'noticia']);
        Swal.fire({
          icon: 'success',
          title: `Cuerpo de Bomberos de Manta`,
          text: 'Bienvenido',
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loading = false;
        const response = err.error;
        Swal.fire({
          icon: 'warning',
          title: `Cuerpo de Bomberos de Manta`,
          text: response.message,
          timer: 3500,
          toast: true,
          position: 'bottom-end',
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    });
  }
}
