import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit {
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

  ngAfterViewInit() {
    // Trigger confetti with artist's color palette
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C00010', '#615D6C', '#D2ED96', '#C9D9FC'],
      });
    }, 300);
  }

  triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C00010', '#615D6C', '#D2ED96', '#C9D9FC'],
    });
  }
}
