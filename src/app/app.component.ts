import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flopbuster';
  selectedIndex = -1;

  flops = [
    {
      title: 'The Room',
      stars: 3.7,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Howard the Duck',
      stars: 4.7,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BZWQ5Y2FmMmItZjYzNC00Yzc5LWE0ZjYtMTI4YTA1ZGJkZjgyXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Jack and Jill',
      stars: 3.3,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNjczMTU5OTUyMl5BMl5BanBnXkFtZTcwODEzNjc3Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Cats',
      stars: 2.7,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Dudley Do-Right',
      stars: 3.9,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2EwZWRhNTQtOWJlMS00NDAwLTk2ZGUtNDg1NjUzZGMyMTYzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Batman and Robin',
      stars: 3.7,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Catwoman',
      stars: 3.4,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Last Airbender',
      stars: 4.1,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMTM1NjE0NDA0MV5BMl5BanBnXkFtZTcwODE4NDg1Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Spider-Man 3',
      stars: 6.2,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Transformers: Revenge of the Fallen',
      stars: 6.0,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Twilight',
      stars: 5.2,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Wing Commander',
      stars: 4.3,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMTc1MDI1MDMyN15BMl5BanBnXkFtZTcwMzgzMTIyMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg',
    },
  ];

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
