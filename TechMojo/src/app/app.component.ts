import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechMojo';
   games = [
    {
      title: 'Galactic Warriors',
      players: '3,53,334',
      img: '/assets/images/Background.jpeg',
      onSale: 'true'
    },
    {
      title: 'Kingdom Defence',
      players: '3,53,334',
      img: '/assets/images/Background.jpeg',
      onSale: 'false'
    },
    {
      title: 'Battle Arena',
      players: '2,10,000',
      img: '/assets/images/Background.jpeg',
      onSale: 'false'
    },
    {
      title: 'Dark Souls',
      players: '5,00,000',
      img: '/assets/images/Background.jpeg',
      onSale: 'true'
    }
  ];
}
