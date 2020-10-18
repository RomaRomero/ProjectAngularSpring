import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MascotaService}from '../servicios/mascota.service';
import { Mascota }from '../clases/mascota';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crearpublicacion',
  templateUrl: './crearpublicacion.component.html',
  styleUrls: ['./crearpublicacion.component.css']
})
export class CrearpublicacionComponent implements OnInit {

  mascota: Mascota = new Mascota();
  submitted = false;

  constructor(private mascotaService: MascotaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newMascota(): void {
    this.submitted = false;
    this.mascota = new Mascota();
  }

  save() {
    this.mascotaService.createMascota(this.mascota)
      .subscribe(data => console.log(data), error => console.log(error));
    this.mascota = new Mascota();
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/MenuI']);
  }

}
