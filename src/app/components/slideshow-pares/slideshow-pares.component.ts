import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interface';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas= new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor( private modalCtrl: ModalController) { }

  onClick(){
    this.cargarMas.emit();
  }

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
