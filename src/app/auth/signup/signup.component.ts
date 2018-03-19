import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../auth.style.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  hide = true;

  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ]
    })
  }

  ngOnInit() {
  }

  get email() {
    return this.signupForm.get('email')
  }

  get password() {
    return this.signupForm.get('password')
  }

  signUp() {
    return this.auth.emailSignUp(this.email.value, this.password.value)
      .then(user => {
        if (this.signupForm.valid) {
          // this.location.back();
          this.router.navigate(['/'])
        }
      })
  }

}
