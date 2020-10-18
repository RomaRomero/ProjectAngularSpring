import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PublicacionesService} from './servicios/publicaciones.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { MenupComponent } from './menup/menup.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CrearcuentaComponent } from './crearcuenta/crearcuenta.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicaciontargetaComponent } from './publicaciontargeta/publicaciontargeta.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import {FormsModule,FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { LogoutComponent } from './logout/logout.component';
import { CrearpublicacionComponent } from './crearpublicacion/crearpublicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AcercadeComponent,
    MenupComponent,
    PublicacionesComponent,
    PagenotfoundComponent,
    CrearcuentaComponent,
    PublicacionComponent,
    PublicaciontargetaComponent,
    CabeceraComponent,
    PieComponent,
    CrearusuarioComponent,
    LogoutComponent,
    CrearpublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PublicacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
