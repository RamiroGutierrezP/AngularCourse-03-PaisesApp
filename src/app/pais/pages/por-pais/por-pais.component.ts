import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  sugeridos: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        if (paises.length == undefined) {
          this.hayError = true;
        }
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }

}
