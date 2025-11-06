import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  formulario: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private authService: Auth){

    this.formulario = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required,  Validators.minLength(3)]],
      verifyPassword: ["", [Validators.required,  Validators.minLength(3)]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      country: ["", [Validators.required,  Validators.minLength(4)]],
    })
  }

  register(){
    const {password, verifyPassword} = this.formulario.value

    if(password === verifyPassword){
      this.authService.register(this.formulario.value).subscribe(res => {
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
    }else{
      Swal.fire({
        title: "Error...",
        icon: "error",
        text: "Las contraseñas deben coincidir",
        backdrop: `
        #0000009d
          url("https://cdn.discordapp.com/emojis/717198249383034911.gif?v=1")
          left top
          no-repeat
        `
      })
    }

    
  }

}
