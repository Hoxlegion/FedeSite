import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  medium: string;
  year: string;
  size: 'normal' | 'wide' | 'tall';
  gradient: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  ceramics: Project[] = [
    {
      id: 1,
      title: 'Vessel Series I',
      medium: 'Hand-built, glazed stoneware',
      year: '2025',
      size: 'tall',
      gradient: 'linear-gradient(160deg, #615D6C 0%, #C9D9FC 100%)',
    },
    {
      id: 2,
      title: 'Bowl Studies',
      medium: 'Thrown stoneware',
      year: '2025',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #C9D9FC 0%, #615D6C 100%)',
    },
    {
      id: 3,
      title: 'Terracotta Study',
      medium: 'Earthenware, oxide glaze',
      year: '2024',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #C00010 0%, #615D6C 100%)',
    },
    {
      id: 4,
      title: 'Wall Form No. 2',
      medium: 'Slab-built ceramic',
      year: '2024',
      size: 'wide',
      gradient: 'linear-gradient(160deg, #615D6C 0%, #D2ED96 100%)',
    },
    {
      id: 5,
      title: 'Pinch Vessels',
      medium: 'Hand-pinched raku',
      year: '2025',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #D2ED96 0%, #615D6C 100%)',
    },
    {
      id: 6,
      title: 'Surface Studies',
      medium: 'Textured stoneware',
      year: '2024',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #C9D9FC 0%, #C00010 60%, #615D6C 100%)',
    },
  ];

  textiles: Project[] = [
    {
      id: 7,
      title: 'Woven Ground',
      medium: 'Natural linen &amp; wool',
      year: '2025',
      size: 'wide',
      gradient: 'linear-gradient(160deg, #D2ED96 0%, #C9D9FC 100%)',
    },
    {
      id: 8,
      title: 'Tapestry I',
      medium: 'Wool on cotton warp',
      year: '2025',
      size: 'tall',
      gradient: 'linear-gradient(135deg, #C9D9FC 0%, #615D6C 100%)',
    },
    {
      id: 9,
      title: 'Memory Cloth',
      medium: 'Hand-dyed linen',
      year: '2024',
      size: 'normal',
      gradient: 'linear-gradient(160deg, #615D6C 0%, #D2ED96 100%)',
    },
    {
      id: 10,
      title: 'Color Field',
      medium: 'Woven cotton &amp; silk',
      year: '2024',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #D2ED96 0%, #C00010 100%)',
    },
    {
      id: 11,
      title: 'Soft Structure',
      medium: 'Natural fiber, wire',
      year: '2025',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #C9D9FC 0%, #D2ED96 100%)',
    },
  ];

  more: Project[] = [
    {
      id: 12,
      title: 'Studies in Clay and Thread',
      medium: 'Mixed media installation',
      year: '2025',
      size: 'wide',
      gradient: 'linear-gradient(135deg, #C00010 0%, #C9D9FC 100%)',
    },
    {
      id: 13,
      title: 'Sketchbook Pages',
      medium: 'Drawing &amp; collage',
      year: '2025',
      size: 'normal',
      gradient: 'linear-gradient(160deg, #D2ED96 0%, #615D6C 100%)',
    },
    {
      id: 14,
      title: 'Workshop Documentation',
      medium: 'Photography',
      year: '2024',
      size: 'normal',
      gradient: 'linear-gradient(135deg, #615D6C 0%, #C9D9FC 100%)',
    },
  ];
}
