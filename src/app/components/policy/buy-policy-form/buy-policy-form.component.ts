import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceServiceService,  } from 'src/app/services/insurance-service.service';
import { SharedService } from 'src/app/services/shared.services';

@Component({
  selector: 'app-buy-policy-form',
  templateUrl: './buy-policy-form.component.html',
  styleUrls: ['./buy-policy-form.component.css']
})
export class BuyPolicyFormComponent {
  buyPolicyform: FormGroup;

  constructor(
    private router: Router,
    private insuarnceService: InsuranceServiceService,
    @Inject(SharedService) private sharedService: SharedService    ) {
    this.buyPolicyform = new FormGroup({
      fullname: new FormControl(),
      dob: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      phonenumber: new FormControl(),
      emailaddress: new FormControl(),
      nationality: new FormControl(),
      address: new FormControl(),
      // Insurance: new FormControl(),
      policyCover: new FormControl(),
    });
  }

  onSubmit() {
    console.log('Logging the buyPolicyform data:', this.buyPolicyform.value);
    const data = this.buyPolicyform.value;
    // const policyCoverData = this.buyPolicyform.get('policyCover')?.value;
        // console.log('Policy Cover Data:', policyCoverData);
    this.insuarnceService.buyPolicyDetails({
      fullname: data.fullname,
      dob: data.dob,
      age: data.age,
      gender: data.gender,
      phonenumber: data.phonenumber,
      emailaddress: data.emailaddress,
      nationality: data.nationality,
      address: data.address,
      // Insurance: new FormControl(),
      policyCover: data.policyCover,


    })

    localStorage.setItem('email', data.emailaddress);
    this.sharedService.setEmail(data.emailaddress);
    this.router.navigate(['buypolicy-lists']);
  }

  
  backtoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
