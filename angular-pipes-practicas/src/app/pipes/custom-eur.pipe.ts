import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customEur'
})
export class CustomEurPipe implements PipeTransform {


  //Creación de una pipe personalizada que añade el símbolo de la moneda euro a un valor numérico
  transform(value:string|number): string {
    return value + " €";
    //return `${value} €`; tambien se podría así
  }

}
