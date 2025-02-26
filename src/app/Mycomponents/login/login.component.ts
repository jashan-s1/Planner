import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any
  registerForm :any
  activeForm: 'login' | 'register' = 'login';

  constructor (private fb: FormBuilder,private router : Router , private snackBar :MatSnackBar){}
  ngOnInit() {
  this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
  });
  this.registerForm = this.fb.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
  });
}

toggleForm(form : 'login' | 'register'){
  this.activeForm= form;
}

login(){
  if(this.loginForm.valid){
    this.router.navigate(['/dashboard']);
  }
  else{
    this.snackBar.open('Invalid Email or Passoword...','close', {duration : 3000})
  }


}

register() {
  if (this.registerForm.valid) {
  console.log("Register info==>>", this.registerForm.value);
  setTimeout(() => {
  window.location.reload();
  }, 2000);
  this.router.navigate(['/budget-planner/login']);
  } else {
  this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
  }
}
}
