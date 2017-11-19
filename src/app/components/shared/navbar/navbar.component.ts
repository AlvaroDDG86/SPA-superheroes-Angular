import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, private _heroesService:HeroesService) { }

  ngOnInit() {
  }
  
  buscar(texto){
    this._router.navigate(['/buscar', texto]);
  }
}
