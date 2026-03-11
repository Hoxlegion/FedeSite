import { Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  submitted = signal(false);

  inquiryTypes = [
    'Commission a piece',
    'Purchase existing work',
    'Collaboration',
    'General inquiry',
  ];

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    inquiry: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  onSubmit() {
    if (this.form.valid) {
      this.submitted.set(true);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
