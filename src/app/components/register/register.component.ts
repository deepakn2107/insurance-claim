import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceServiceService } from 'src/app/services/insurance-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup
constructor(
  private router:Router,
  private insuarnceService: InsuranceServiceService,

  
  ){
  this.registrationForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })
}
  register(){
    const data = this.registrationForm.value;
    console.log("logging the registration for data: " + JSON.stringify(this.registrationForm.value));
    this.insuarnceService.registrationDetails({
      firstname: data.firstName,
      lastname: data.lastname,
      email: data.email,
      password:data.password,
    }).subscribe({
      next:(response)=>{
        if(response.success == true){
          this.router.navigate(['/'])

        }
      }
    })
  }
}
