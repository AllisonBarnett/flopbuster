import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlopChooserService {
  flopData;

  constructor() {
      this.flopData = FLOP_DATA;
}
