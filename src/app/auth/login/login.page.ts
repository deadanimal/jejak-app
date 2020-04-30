import { ToastController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotificationService } from 'src/app/shared/handler/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Form
  validations_form: FormGroup;
  validation_messages = {
    'username': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'At least 6 characters long.' }
    ]
  };

  // Loading
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  tryLogin(value) {
    console.log(value)
  }

  login() {
    this.isLoading = true
    console.log(this.validations_form.value)
    this.authService.obtainToken(this.validations_form.value).subscribe(
      () => {
        // Success
        this.isLoading = false
      },
      () => {
        // Failed
        this.isLoading = false
      },
      () => {
        // After
        this.toastr.openToastr('Welcome back')
        this.navigateHomePage()
      }
    )
  }

  navigateHomePage() {
    this.router.navigate(['/core/dashboard'], {
      replaceUrl: true
    })
  }

  navigateForgotPage() {
    this.router.navigate(['/forgot'])
  }

  navigateRegisterPage() {
    this.router.navigate(['/register'])
  }

}
