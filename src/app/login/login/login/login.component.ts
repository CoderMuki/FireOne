import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  signup = false;

  constructor( public fb: FormBuilder){
    
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
    this.signUpForm = this.fb.group({
      name: [''],
      username: [''],
      password: ['']
    });
  }
  
}
