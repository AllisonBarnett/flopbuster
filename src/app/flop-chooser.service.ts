import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlopChooserService {
  flopData;

  constructor() {
    this.flopData = [
      {
        title: 'Battlefield Earth',
        stars: 2.5,
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BMTg0Njk2OTM3OF5BMl5BanBnXkFtZTYwNTAyMzc3._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
      {
        title: 'Santa Clause Conquers the Martians',
        stars: 2.7,
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BZDllYzM0YjktYWNjOC00MjZjLWE2Y2EtOGRkMTY1N2I3MjUxXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
    ];
  }
}
