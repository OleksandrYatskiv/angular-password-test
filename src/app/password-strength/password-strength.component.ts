import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from '../services/password-strength.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true,
    },
  ],
})
export class PasswordStrengthComponent implements ControlValueAccessor{
  password: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.password = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  passwordStrengthColor(): string {
    return this.passwordStrengthService.getPasswordStrengthColor(this.password);
  }

  sectionColor(sectionNumber: number): string {
    return this.passwordStrengthService.getSectionColor(this.password, sectionNumber);
  }

  updatePassword(event: any) {
    this.password = event.target.value;
    this.onChange(this.password);
    this.onTouched();
  }
}
