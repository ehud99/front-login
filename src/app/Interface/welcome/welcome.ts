import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [
    JsonPipe
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {

  user: any

  constructor(private authService: Auth) {}

  ngOnInit(): void{
    this.user = JSON.parse(localStorage.getItem("user") || ""); 
  }
}
