import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../clases/persona';
import { PersonaService} from '../servicios/persona.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {
  
  persona: Persona = new Persona();
  submitted = false;
  nosubmitted=false;

  constructor(private personaService: PersonaService,
    private router: Router 
    ) {

    }

  ngOnInit() {
  }

  newPersona(): void {
    this.submitted = false;
    this.nosubmitted=false;
    this.persona = new Persona();
  }

  save() {
    this.personaService.createPersona(this.persona)
      .subscribe(data => console.log(data), error => console.log(error));
    this.persona = new Persona();
    this.gotoList();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  noSubmit() {
    this.submitted = false;
    this.gotoList2();
 
  }

  gotoList() {
    this.router.navigate(['/Usuario']);
  }
  gotoList2() {
    this.router.navigate(['']);
  }
 
}