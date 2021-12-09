import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
})
export class MovieSelectorComponent {
  @Input() movie;
}
