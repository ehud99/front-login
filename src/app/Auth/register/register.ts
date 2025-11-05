import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  registro: FormGroup

  constructor(private fb: FormBuilder){

    this.registro = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required,  Validators.minLength(3)]],
      verifyPassword: ["", [Validators.required,  Validators.minLength(3)]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      country: ["", [Validators.required]],
    })

  }

}
