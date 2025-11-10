import { Component } from '@angular/core';
import { Crud } from '../../services/crud';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDivider,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIcon
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  
  allUsers: Array<any> = [];
  user: any;

  displayedColumns: string[] = ['nombre', 'pais', 'rol', "actions"];
  dataSource = new MatTableDataSource<any>([])

  constructor(private crudService: Crud, private router: Router){

  }

  ngOnInit(): void{
    this.user = this.crudService.user;
    this.crudService.read().subscribe(res => {
      console.log(res)
      this.allUsers = res
      this.dataSource.data = this.allUsers
    })
  }

  update(usuario: any){
    const {id,role} = usuario

    this.router.navigateByUrl(`/sesion/${id}/${role}`)
  }

  delete(id: string){
    this.crudService.delete(id).subscribe((response) => {
      this.crudService.read().subscribe((res) => {
        this.allUsers = res
        this.dataSource.data = this.allUsers
      })
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/auth")
  }

}
