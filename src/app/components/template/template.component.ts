import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit{

 /* usuario = {    nombre : 'Alexander', apellido: 'Zabala', correo: 'alex.azv1989@gmail.com', pais: 'BO', Genero: 'M'

  }*/
  paises: any[]=[];
  constructor (private paisService: PaisService){}
  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises => {
      this.paises = paises;
      this.paises.unshift({nombre:'[Seleccione Pais', codigo: ''})
    });
  }
  guardar(forma: NgForm){
    console.log(forma);
    if (forma.invalid){
      Object.values(forma.controls).forEach(control =>{
        control.markAllAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }

}
