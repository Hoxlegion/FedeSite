import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ceramics collection', () => {
    expect(component.ceramics.length).toBeGreaterThan(0);
  });

  it('should have textiles collection', () => {
    expect(component.textiles.length).toBeGreaterThan(0);
  });

  it('should have more collection', () => {
    expect(component.more.length).toBeGreaterThan(0);
  });

  it('should display page heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');
    expect(heading?.textContent).toContain('Projects');
  });

  it('should display ceramics section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.textContent).toContain('Ceramics');
  });

  it('should display textiles section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Textiles');
  });

  it('should display more section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('More');
  });

  it('should render ceramic pieces', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const articles = compiled.querySelectorAll('article');
    const totalPieces =
      component.ceramics.length + component.textiles.length + component.more.length;
    expect(articles.length).toBe(totalPieces);
  });

  it('each ceramic piece should have title, medium, and year', () => {
    component.ceramics.forEach((piece) => {
      expect(piece.title).toBeTruthy();
      expect(piece.medium).toBeTruthy();
      expect(piece.year).toBeTruthy();
    });
  });

  it('each textile piece should have title, medium, and year', () => {
    component.textiles.forEach((piece) => {
      expect(piece.title).toBeTruthy();
      expect(piece.medium).toBeTruthy();
      expect(piece.year).toBeTruthy();
    });
  });

  it('each item should have a gradient background', () => {
    const allPieces = [...component.ceramics, ...component.textiles, ...component.more];
    allPieces.forEach((piece) => {
      expect(piece.gradient).toBeTruthy();
      expect(piece.gradient).toContain('linear-gradient');
    });
  });
});
