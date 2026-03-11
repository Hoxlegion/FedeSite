import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a contact form', () => {
    expect(component.form).toBeTruthy();
  });

  it('should have name field', () => {
    const nameControl = component.form.get('name');
    expect(nameControl).toBeTruthy();
  });

  it('should have email field', () => {
    const emailControl = component.form.get('email');
    expect(emailControl).toBeTruthy();
  });

  it('should have inquiry field', () => {
    const inquiryControl = component.form.get('inquiry');
    expect(inquiryControl).toBeTruthy();
  });

  it('should have message field', () => {
    const messageControl = component.form.get('message');
    expect(messageControl).toBeTruthy();
  });

  it('should require name field', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    expect(nameControl?.hasError('required')).toBe(true);
  });

  it('should require email field', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('');
    expect(emailControl?.hasError('required')).toBe(true);
  });

  it('should validate email format', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBe(true);
    
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBe(false);
  });

  it('should require message field', () => {
    const messageControl = component.form.get('message');
    messageControl?.setValue('');
    expect(messageControl?.hasError('required')).toBe(true);
  });

  it('should validate message minimum length', () => {
    const messageControl = component.form.get('message');
    messageControl?.setValue('Short');
    expect(messageControl?.hasError('minlength')).toBe(true);
    
    messageControl?.setValue('This is a long enough message to pass validation');
    expect(messageControl?.hasError('minlength')).toBe(false);
  });

  it('should be invalid when form is empty', () => {
    expect(component.form.valid).toBe(false);
  });

  it('should be valid when all required fields are filled correctly', () => {
    component.form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      inquiry: 'General inquiry',
      message: 'This is a test message that is long enough to pass validation',
    });
    expect(component.form.valid).toBe(true);
  });

  it('should not submit invalid form', () => {
    component.onSubmit();
    expect(component.submitted()).toBe(false);
  });

  it('should submit valid form', () => {
    component.form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      inquiry: 'General inquiry',
      message: 'This is a test message that is long enough to pass validation',
    });
    component.onSubmit();
    expect(component.submitted()).toBe(true);
  });

  it('should reset form after submission', () => {
    component.form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      inquiry: 'General inquiry',
      message: 'This is a test message that is long enough to pass validation',
    });
    component.onSubmit();
    
    // Form should be reset
    expect(component.form.get('name')?.value).toBe(null);
    expect(component.form.get('email')?.value).toBe(null);
  });

  it('should display contact information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Say Hello');
  });

  it('should have email link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailLink = compiled.querySelector('a[href^="mailto:"]');
    expect(emailLink).toBeTruthy();
  });

  it('should have inquiry type options', () => {
    expect(component.inquiryTypes.length).toBeGreaterThan(0);
    expect(component.inquiryTypes).toContain('Commission a piece');
  });

  it('should check field validity with isInvalid method', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    nameControl?.markAsTouched();
    
    expect(component.isInvalid('name')).toBe(true);
    
    nameControl?.setValue('John Doe');
    expect(component.isInvalid('name')).toBe(false);
  });
});
