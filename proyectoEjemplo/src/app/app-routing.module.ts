import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ApprovedComponent } from './components/approved/approved.component';

const routes: Routes = [
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'approved', component: ApprovedComponent},
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
