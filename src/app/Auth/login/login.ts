import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  formulario: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private authService: Auth){

    this.formulario = this.fb.group({
      username: ["mandir", [Validators.required, Validators.minLength(3)]],
      password: ["123", [Validators.required,  Validators.minLength(3)]],
    })
  }

  login(){
    
    this.authService.login(this.formulario.value).subscribe(res => {
      console.log(res)
    })

    //this.router.navigateByUrl("/sesion")
  }
}
