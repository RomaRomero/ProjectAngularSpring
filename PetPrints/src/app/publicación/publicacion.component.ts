import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publicacion, PublicacionesService} from '../servicios/publicaciones.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicacion:Publicacion;

  constructor(private activatedRoute:ActivatedRoute, private publicacionService:PublicacionesService) {
    this.activatedRoute.params.subscribe(params=>{
      this.publicacion=this.publicacionService.getPublicacion(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
