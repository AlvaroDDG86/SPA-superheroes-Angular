import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import  {HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = [];
  termino:string;
  constructor(private _activatedRoute:ActivatedRoute,
              private router:Router,
              private  _heroesService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe', index]);
  }

}
