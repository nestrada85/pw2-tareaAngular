import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecionComponent } from './secion/secion.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EnlaceFotoComponent } from './enlace-foto/enlace-foto.component';
import { TituloWebComponent } from './titulo-web/titulo-web.component';
import { DescripcionWebComponent } from './descripcion-web/descripcion-web.component';

@NgModule({
  declarations: [
    AppComponent,
    SecionComponent,
    CarrouselComponent,
    GaleriaComponent,
    EnlaceFotoComponent,
    TituloWebComponent,
    DescripcionWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
