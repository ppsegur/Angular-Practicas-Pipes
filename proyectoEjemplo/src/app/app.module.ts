import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { provideHttpClient } from '@angular/common/http';
import { ApprovedComponent } from './components/approved/approved.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ApprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
