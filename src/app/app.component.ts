import { Component } from '@angular/core';
import { FlopChooserService } from './flop-chooser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flopbuster';
  selectedIndex = -1;
  flops;

  constructor(public flopChooser: FlopChooserService) {}

  selectNewFlop() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

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
