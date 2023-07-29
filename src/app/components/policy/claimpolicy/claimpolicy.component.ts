import { Component } from '@angular/core';

@Component({
  selector: 'app-claimpolicy',
  templateUrl: './claimpolicy.component.html',
  styleUrls: ['./claimpolicy.component.css']
})
export class ClaimpolicyComponent {
  claimData = {
    policyNumber: '',
    claimAmount: null,
    reason: ''
  }

  claimSubmitted = false;

  submitClaimForm() {
    // You can perform additional validations here before submitting the claim
    // For example, you can check if the policy number is valid, or the claim amount is within a certain range.
    
    // For this example, we'll simply mark the form as submitted.
    this.claimSubmitted = true;
  }
}
