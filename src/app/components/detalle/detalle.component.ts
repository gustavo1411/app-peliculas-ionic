import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

 @Input() id;

 pelicula: PeliculaDetalle = {};
 oculto = 150;
  actores: Cast[] = [];

 slideOptActores = {
   slidesPerView: 3.3,
   freeMode: true,
   spaceBetween: 5
 };

  constructor( private movieService: MoviesService,
              private modalCtrl: ModalController) { }

  regresar(){
    this.modalCtrl.dismiss();
  }            

  ngOnInit() {
  //  console.log('ID', this.id)
    this.movieService.getDetallePelicula(this.id)
    .subscribe(resp => {
      console.log(resp)
      this.pelicula = resp;
    })

    this.movieService.getActores(this.id)
    .subscribe(resp =>{
      console.log(resp);
      this.actores = resp.cast;
    })

  }

 
}
