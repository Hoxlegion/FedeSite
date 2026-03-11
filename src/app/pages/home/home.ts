import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  featuredWorks = [
    {
      title: 'Vessel Series I',
      medium: 'Hand-built ceramics',
      year: '2025',
      gradient: 'linear-gradient(135deg, #615D6C 0%, #C9D9FC 100%)',
    },
    {
      title: 'Woven Ground',
      medium: 'Natural fiber textile',
      year: '2025',
      gradient: 'linear-gradient(160deg, #D2ED96 0%, #615D6C 100%)',
    },
    {
      title: 'Terracotta Study',
      medium: 'Thrown ceramics',
      year: '2024',
      gradient: 'linear-gradient(135deg, #C00010 0%, #615D6C 100%)',
    },
  ];
}
