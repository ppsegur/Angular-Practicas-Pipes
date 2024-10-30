import { Component, OnInit } from '@angular/core';
import { CustomEurPipe } from '../../pipes/custom-eur.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Home';
  texto="hOME" ;
  precio = 100;
  fecha = new Date("2020-12-12");
  porcentaje = 0.1234;
  customEurValue: string | number = 100;
  constructor(private customEur: CustomEurPipe) {}
  ngOnInit(): void {
    this.customEurValue = this.customEur.transform(this.customEurValue);
  }
}
