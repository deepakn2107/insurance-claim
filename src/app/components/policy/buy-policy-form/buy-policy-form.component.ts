import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-policy-form',
  templateUrl: './buy-policy-form.component.html',
  styleUrls: ['./buy-policy-form.component.css']
})
export class BuyPolicyFormComponent {
constructor(private router:Router){}
backtoDashboard(){
  this.router.navigate(['/dashboard'])
}
}
