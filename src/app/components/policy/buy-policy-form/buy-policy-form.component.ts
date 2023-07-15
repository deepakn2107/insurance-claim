import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-policy-form',
  templateUrl: './buy-policy-form.component.html',
  styleUrls: ['./buy-policy-form.component.css']
})
export class BuyPolicyFormComponent {
  buyPolicyform: FormGroup;

  constructor(private router: Router) {
    this.buyPolicyform = new FormGroup({
      firstName: new FormControl(),
      dob: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      phonenumber: new FormControl(),
      emailaddress: new FormControl(),
      nationality: new FormControl(),
      address: new FormControl(),
      Insurance: new FormControl(),
      // policyCover: new FormControl(),
    });
  }

  onSubmit() {
    console.log('Logging the buyPolicyform data:', this.buyPolicyform.value);

    const policyCoverData = this.buyPolicyform.get('policyCover')?.value;
    console.log('Policy Cover Data:', policyCoverData);
  }

  
  backtoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
