import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Crud } from '../../services/crud';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Form, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  //allUsers: any = {};
  id: string = "";
  user: any;

  editarUsuario: FormGroup;

  //-------------------------------------------

  constructor (
    private crudService: Crud,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ){

  this.editarUsuario = this.formBuilder.group({
    editUser: [''],
  });


  this.activatedRoute.params.subscribe((params) => {
        this.editarUsuario.setValue({ editUser: params['role'] });
        this.id = params['id'];
    });
  }

  ngOnInit(): void{
    this.user = this.crudService.user;
  }

  update(){
    this.crudService.update(this.id, this.editarUsuario.value.editUser).subscribe(res => {
      this.router.navigateByUrl('/sesion')
    })

  }

}
