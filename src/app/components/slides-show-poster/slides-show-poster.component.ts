import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interface';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-slides-show-poster',
  templateUrl: './slides-show-poster.component.html',
  styleUrls: ['./slides-show-poster.component.scss'],
})
export class SlidesShowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async mostrarDetalle(id:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    })
    modal.present();
  }

}
