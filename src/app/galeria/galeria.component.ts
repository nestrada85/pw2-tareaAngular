import { Component, Input } from '@angular/core';
import { IGaleria } from './IGaleria';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
 @Input() galeria: IGaleria = {
   heroes: '',
   enlaces: {
     href: ''
   }
 }
}
