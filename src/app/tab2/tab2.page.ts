import { Component } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar='';

  buscando= false;

  algunasPelis: string[] = ['batman', 'jack' , 'spiderman', 'superman', 'matilda', 'el naufrago'];

  peliculas: Pelicula[] = [];


  constructor( private movieService: MoviesService,
                private modalCtrl: ModalController) {}

  onSearchChange(event){
    const valor = event.detail.value;

    if(valor.length === 0){
      this.buscando = false,
      this.peliculas = [];
      return;
    }

    // console.log(valor)
    this.buscando = true;
    this.movieService.getBuscarPelicula(valor)
    .subscribe(resp =>{
      console.log(resp)
      this.peliculas = resp['results'];
      this.buscando = false;
    })
  }

  async mostrarDetalle(id:string){
   const modal = await  this.modalCtrl.create({
      component:DetalleComponent,
      componentProps:{
      id
      }
    })
    modal.present();
  }



  
  

}
