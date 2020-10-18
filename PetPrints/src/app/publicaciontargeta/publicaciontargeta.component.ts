import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciontargeta',
  templateUrl: './publicaciontargeta.component.html',
  styleUrls: ['./publicaciontargeta.component.css']
})
export class PublicaciontargetaComponent implements OnInit {
  @Input()
  publicacion:any={}
  @Input() indice:number;
@Output()
  PublicacionSeleccionada:EventEmitter<number>;


  constructor(private router:Router) {
    this.PublicacionSeleccionada=new EventEmitter();
   }

  ngOnInit(): void {
  }
  verPublicacion(){
    this.router.navigate(['./Publicacion',this.indice]);
  }

}
