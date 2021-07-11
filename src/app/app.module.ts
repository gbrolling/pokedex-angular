import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './pages/cards/cards.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonPopupComponent } from './pages/pokemon-popup/pokemon-popup.component';
import { LottieModule } from 'ngx-lottie';
import { LottieComponent } from './shared/lottie/lottie.component';


export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    PokemonPopupComponent,
    LottieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    LottieModule.forRoot({ player: playerFactory/*  useCache: true  */})

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


