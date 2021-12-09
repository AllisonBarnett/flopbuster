import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flopbuster';
  selectedIndex = -1;

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

  onFirstSelected() {
    console.log('first');
  }

  onSecondSelected() {
    console.log('second');
  }
}
