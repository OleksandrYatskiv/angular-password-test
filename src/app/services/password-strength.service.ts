import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrengthColor(password: string): string {
    if (!password) {
      return 'gray';
    } else if (password.length < 8) {
      return 'red';
    } else if (this.isPasswordStrong(password)) {
      return 'green';
    } else if (this.isPasswordMedium(password)) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  getSectionColor(password: string, sectionNumber: number): string {
    if (!password) {
      return 'gray';
    } else if (password.length < 8) {
      return 'red';
    }

    if (this.isPasswordStrong(password) && sectionNumber <= 3) {
      return 'green';
    } else if (this.isPasswordMedium(password) && sectionNumber <= 2) {
      return 'yellow';
    } else if (sectionNumber === 1) {
      return 'red';
    }

    return 'gray';
  }

  private isPasswordStrong(password: string): boolean {
    return /[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  }

  private isPasswordMedium(password: string): boolean {
    return (
      /[a-zA-Z]/.test(password) &&
      (/\d/.test(password) || /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) ||
      /\d/.test(password) && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)
    );
  }
}
