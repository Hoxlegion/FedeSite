import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display artist name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nameLink = compiled.querySelector('a[routerLink="/"]');
    expect(nameLink?.textContent).toContain('Federica Moro');
  });

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a[routerLink]');
    expect(links.length).toBeGreaterThanOrEqual(3); // Home, Projects, Contact
  });

  it('should toggle menu when hamburger is clicked', () => {
    expect(component.isMenuOpen()).toBe(false);
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should close menu when closeMenu is called', () => {
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);
    component.closeMenu();
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should have hamburger button for mobile', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hamburger = compiled.querySelector('button[aria-label="Toggle navigation"]');
    expect(hamburger).toBeTruthy();
  });

  it('should update isScrolled on scroll', () => {
    expect(component.isScrolled()).toBe(false);
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    component.onScroll();
    expect(component.isScrolled()).toBe(true);
    
    // Reset
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    component.onScroll();
    expect(component.isScrolled()).toBe(false);
  });
});
