import { JSDocComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceServiceService } from 'src/app/services/insurance-service.service';

@Component({
  selector: 'app-claimpolicy',
  templateUrl: './claimpolicy.component.html',
  styleUrls: ['./claimpolicy.component.css']
})
export class ClaimpolicyComponent {
  claimForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private insuarnceService: InsuranceServiceService,
    ) {
    this.claimForm = new FormGroup({
      policyNumber: new FormControl(),
      claimAmount: new FormControl(),
      reason: new FormControl(),
    })
  }

  ngOnInit(): void {
    // Initialize the form with default values and validators
    this.claimForm = this.formBuilder.group({
      policyNumber: ['', Validators.required],
      claimAmount: [null, [Validators.required, Validators.min(0)]],
      reason: ['', Validators.required],
    });
  }

  submitClaimForm(): void {
   const data = this.claimForm.value;

   this.insuarnceService.claimPolicy({
    policyNumber: data.policyNumber,
      claimAmount: data.claimAmount,
      reason: data.reason,
   })

   console.log(`Logigng the data for claim policy ${JSON.stringify(data)}`);
   

  }
}
