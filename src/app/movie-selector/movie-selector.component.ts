import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
})
export class MovieSelectorComponent {
  @Input() movie;
  // tslint:disable-next-line:no-output-native
  @Output() select = new EventEmitter();

  onClick() {
    this.select.emit();
  }
}
