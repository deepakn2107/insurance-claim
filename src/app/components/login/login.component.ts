import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceServiceService } from 'src/app/services/insurance-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm!: FormGroup;
constructor(
  private router:Router,
  private insuarnceService: InsuranceServiceService,
  ){
  this.loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
}
onSubmit(){
  console.log(`Logging the login form data ${JSON.stringify(this.loginForm.value)}`, );
  console.log(`Logging ${this.loginForm.get('email')?.value}`);
  const data = this.loginForm.value;
  this.insuarnceService.loginDetails({
    email: data.email,
    password: data.password
  }).subscribe({
    next:(response)=>{
      if(response.success == true){
        this.router.navigate(['/dashboard'])
      }
      else{
        window.alert(response.message)
      }
    }
  })
}
}
 