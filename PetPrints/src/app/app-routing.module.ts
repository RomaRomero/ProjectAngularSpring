import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { CrearcuentaComponent } from './crearcuenta/crearcuenta.component';
import { CrearpublicacionComponent } from './crearpublicacion/crearpublicacion.component';
import { CrearusuarioComponent  } from './crearusuario/crearusuario.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { MenupComponent } from './menup/menup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

const routes: Routes = [
  {path:'',redirectTo:'MenuP',pathMatch:'full'},
  { path: 'MenuP', component: MenupComponent },
  { path: 'Acercade', component: AcercadeComponent },
  { path: 'Publicaciones', component: PublicacionesComponent },
  { path: 'MenuP/Login', component: LoginComponent },
  { path: 'MenuP/Crear', component: CrearcuentaComponent },
  { path: 'Publicaciones/:id', component: PublicacionesComponent },
  { path: 'MenuI', component: MenuComponent },
  { path: 'Usuario', component: CrearusuarioComponent },
  { path: 'MenuI/Logout', component:LogoutComponent},
  { path: 'MenuI/CrearM', component: CrearpublicacionComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
