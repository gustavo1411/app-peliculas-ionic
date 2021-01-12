import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  

  constructor( private movieService: MoviesService) {}

ngOnInit(){
  this.movieService.getCartelera()
  .subscribe( resp =>{
    console.log('resp', resp)
    this.peliculasRecientes = resp.results;
  })

  this.getPopulares();
  
}

cargarMas(){
  this.getPopulares();
}

getPopulares(){
  this.movieService.getPopulares()
  .subscribe( resp =>{
    // console.log('Populares', resp)
    const arrTemp = [...this.populares, ...resp.results];
    this.populares = arrTemp;
    // this.populares.push( ...resp.results)
  })
}




}
