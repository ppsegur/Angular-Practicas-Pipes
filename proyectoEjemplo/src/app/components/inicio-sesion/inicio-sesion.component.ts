import { Component } from '@angular/core';
import { AutServicesService } from '../../services/aut-services.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

  constructor(private auth: AutServicesService) { }

  createRequestToken() {
    this.auth.createRequestToken().subscribe(resp => {
      //Primer paso guardar tu variable en el navegador para que no se pierda
      localStorage.setItem('request_token', resp.request_token);

      //Segundo paso redireccionar a la pagina de inicio de sesion
      window.location.href = `https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/approved`;
    });
  }


  
}
