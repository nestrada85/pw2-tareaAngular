import { Component, Input } from '@angular/core';
import { IEnlace } from './IEnlace';

@Component({
  selector: 'app-enlace-foto',
  templateUrl: './enlace-foto.component.html',
  styleUrls: ['./enlace-foto.component.css']
})
export class EnlaceFotoComponent {
  @Input() enlace: IEnlace = {
    href: "https://cdn.wallpapersafari.com/32/94/EIeXpf.jpg"
  }
}
