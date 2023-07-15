import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm!: FormGroup;
constructor(private router:Router){
  this.loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
}
onSubmit(){
  console.log(`Logging the login form data ${JSON.stringify(this.loginForm.value)}`, );
  console.log(`Logging ${this.loginForm.get('email')?.value}`);
  
  this.router.navigate(['/dashboard'])
}
}
 