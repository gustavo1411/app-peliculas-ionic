import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, Genre } from '../interfaces/interface';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  generos: Genre[] = [];


  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){

    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;

    // console.log(query); 
    // sacamos el link para la interface

    return this.http.get<T>(query);

  }

  getPopulares(){

    this.popularesPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;

    return this.ejecutarQuery<RespuestaMDB>(query)
  }

  getDetallePelicula( id: string){

    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`)
  }

  getActores(id:string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`)
  }

  getBuscarPelicula(texto:string){
    return this.ejecutarQuery(`/search/movie?query=${texto}`);
  }

  cargarGenero(): Promise<any[]>{
    return new Promise( resolve =>{
      
             this.ejecutarQuery(`/genre/movie/list?a=1`)
              .subscribe(resp =>{
                this.generos = resp['genres'];
                console.log(this.generos);
                resolve( this.generos)
              });
    });
  }


  getCartelera(){

  // const hoy = new Date();
  // const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
  // const mes = hoy.getMonth() + 1;

  // let mesString;

  // if ( mes < 10){
  //   mesString = '0' + mes;
  // }else{
  //   mesString = mes;
  // }

  // const inicio = `${hoy.getFullYear() }- ${mesString}- 01`;
  // const fin = `${hoy.getFullYear() }- ${mesString}- ${ultimoDia}`;


 return this.ejecutarQuery<RespuestaMDB>('/discover/movie?primary_release_date.gte=2020-12-01&primary_release_date.lte=2020-12-31');
}


}
