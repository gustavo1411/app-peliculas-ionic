import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interface';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}


 async mostrarDetalle( id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
}
