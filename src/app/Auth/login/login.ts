import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

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
      if(res === true){
        localStorage.setItem("user", JSON.stringify(this.authService.user));
        this.router.navigateByUrl("/sesion")
      }else{
        
        Swal.fire({
          title: "Error...",
          icon: "error",
          text: "Credenciales Incorrectas",
          backdrop: `
          #0000009d
            url("https://cdn.discordapp.com/emojis/717198249383034911.gif?v=1")
            left top
            no-repeat
          `
        })
      }
      
    })
    
  }
}
