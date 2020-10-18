import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion, PublicacionesService } from '../servicios/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  listadoPublicaciones:Publicacion[]=[];

  constructor(private publicacionesService:PublicacionesService,private router:Router) { }

  ngOnInit(): void {
    this.listadoPublicaciones=this.publicacionesService.getPublicaciones();
  }

}
