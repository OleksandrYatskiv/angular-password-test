import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PasswordStrengthComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-password-test';

  myForm: FormGroup = this.fb.group({
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
}
