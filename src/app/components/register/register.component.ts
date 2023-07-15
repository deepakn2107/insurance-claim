import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup
constructor(private router:Router){
  this.registrationForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })
}
  register(){
    console.log("logging the registration for data: " + JSON.stringify(this.registrationForm.value));
    
    this.router.navigate(['/'])
  }
}
