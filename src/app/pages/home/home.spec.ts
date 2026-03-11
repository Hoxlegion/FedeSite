import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display artist name in hero section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');
    expect(heading?.textContent).toContain('Federica');
    expect(heading?.textContent).toContain('Moro');
  });

  it('should have featured works', () => {
    expect(component.featuredWorks.length).toBeGreaterThan(0);
  });

  it('should display featured works section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featuredItems = compiled.querySelectorAll('article');
    expect(featuredItems.length).toBeGreaterThan(0);
  });

  it('should have View Projects button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const projectsLink = compiled.querySelector('a[routerLink="/projects"]');
    expect(projectsLink).toBeTruthy();
  });

  it('should have Get in Touch button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactLink = compiled.querySelector('a[routerLink="/contact"]');
    expect(contactLink).toBeTruthy();
  });

  it('should display about section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutSection = compiled.textContent;
    expect(aboutSection).toContain('About Me');
  });

  it('should display inspiration section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Inspiration');
  });

  it('should display collaborate section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain("Let's make something together");
  });

  it('should render correct number of featured works', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const workCards = compiled.querySelectorAll('article');
    // Featured works section renders articles
    expect(workCards.length).toBeGreaterThanOrEqual(component.featuredWorks.length);
  });
});
