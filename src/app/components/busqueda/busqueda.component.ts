import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements DoCheck {

  heroeBusqueda: Heroe[] = [];
  hayResultados: boolean;
  busqueda: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router) {

  }

  ngDoCheck() {
    this.realizarBusqueda();
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

  realizarBusqueda() {
    this.busqueda = this.activatedRoute.snapshot.params.busqueda;
    console.log(this.busqueda);
    this.heroeBusqueda = this.heroeService.buscarHeroe(this.busqueda);
    this.hayResultados = this.heroeBusqueda.length > 0;
  }

}
