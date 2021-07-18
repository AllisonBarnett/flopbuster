import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flopbuster';
  selectedIndex = -1;

  flops = {
    hobbit:
      'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/86974/86527/the_hobbit_the_desolution_of_smaug__final_poster_buy_original_movie_posters_at_starstills__35272__21743.1394515789.jpg?c=2',
    newMoon:
      'https://cdn.shopify.com/s/files/1/1416/8662/products/twilightnewmoon_2009_original_film_art_b4de3022-d6fa-43f4-815a-c2cc4df164f1_1200x.jpg?v=1618949594',
    velocipastor:
      'https://m.media-amazon.com/images/M/MV5BZTJiZjFkNmYtNmU3My00MmE1LWI4YWEtNWFkZDJiOTgwMTNkXkEyXkFqcGdeQXVyMTg0MTI3Mg@@._V1_.jpg',
    cryWilderness:
      'https://cdn.cinematerial.com/p/297x/knnahuxr/cry-wilderness-movie-poster-md.jpg?v=1456385813',
  };

  onVote(index) {
    if (this.isSelected(index)) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index) {
    return this.selectedIndex === index;
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }

  getButtonText(index) {
    if (this.isSelected(index)) {
      return 'Unvote';
    } else {
      return 'Vote';
    }
  }
}
