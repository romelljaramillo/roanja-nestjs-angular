import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });

  constructor( private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private ngZone: NgZone ) { }

  ngOnInit(): void {
  }

  login() {
    console.warn(this.loginForm.value);
    this.loginService.login( this.loginForm.value )
      .subscribe( resp => {
        console.log(resp);

        
        // if ( this.loginForm.get('remember').value ){ 
        //   localStorage.setItem('email', this.loginForm.get('email').value );
        // } else {
        //   localStorage.removeItem('email');
        // }

        // Navegar al Dashboard
        this.router.navigateByUrl('/');

      }, (err) => {
        // Si sucede un error
        // Swal.fire('Error', err.error.msg, 'error' );
      });

  }

}
