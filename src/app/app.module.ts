import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { FlopVotesComponent } from './flop-votes/flop-votes.component';
import { RentalCartComponent } from './rental-cart/rental-cart.component';
import { MovieSelectorComponent } from './movie-selector/movie-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDisplayComponent,
    FlopVotesComponent,
    RentalCartComponent,
    MovieSelectorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
