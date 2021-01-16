import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interface';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoGenero: any[] = [];

  constructor ( private dataLocal: DataLocalService,
                private movieService: MoviesService){}

   ngOnInit(){
  }
  
  async ionViewWillEnter(){
    
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGenero();
  
    this.pelisGenero(this.generos, this.peliculas);
  }

  pelisGenero(generos:Genre[], pelicula:PeliculaDetalle[]){

    this.favoritoGenero = [];

    generos.forEach(genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: this.peliculas.filter( peli =>{
          return peli.genres.find(genre => genre.id === genero.id);
        })
      })
    })


  }

}
