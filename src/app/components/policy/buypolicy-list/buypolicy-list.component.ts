import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceServiceService } from 'src/app/services/insurance-service.service';
import { SharedService } from 'src/app/services/shared.services';

@Component({
  selector: 'app-buypolicy-list',
  templateUrl: './buypolicy-list.component.html',
  styleUrls: ['./buypolicy-list.component.css']
})
export class BuypolicyListComponent implements OnInit{
  emailaddress:string=''
  
  constructor(
    private router:Router,
    private insuarnceService: InsuranceServiceService,
    private sharedService: SharedService
    ){}
  ngOnInit() {
    this.emailaddress = this.sharedService.getEmail();
    console.log(`Logging the email in buypolicylist component file${this.emailaddress}`);
    
  }

  policies = [
    {
      name: 'Comprehensive Health Shield',
      coverage: 500000,
      premium: 10000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 2,
      networkHospitals: 500,
      maternityCoverage: true
    },
    {
      name: 'Family Floater Plan',
      coverage: 800000,
      premium: 12000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 1,
      networkHospitals: 800,
      maternityCoverage: false
    },
    {
      name: 'Senior Citizens Care',
      coverage: 750000,
      premium: 15000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 1,
      networkHospitals: 400,
      maternityCoverage: false
    },
    {
      name: 'Corporate Wellness Plan',
      coverage: 1500000,
      premium: 20000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 0,
      networkHospitals: 1000,
      maternityCoverage: true
    },
    {
      name: 'Basic Health Coverage',
      coverage: 300000,
      premium: 8000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 2,
      networkHospitals: 300,
      maternityCoverage: false
    },
    {
      name: 'Super Saver Insurance',
      coverage: 2000000,
      premium: 25000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 3,
      networkHospitals: 1500,
      maternityCoverage: true
    },
    {
      name: 'Critical Illness Protection',
      coverage: 1000000,
      premium: 18000,
      startDate: "30-07-2023",
      endDate: "30-07-2025",
      waitingPeriod: 1,
      networkHospitals: 800,
      maternityCoverage: false
    }
  ];

  createPolicy(policy: any) {
    let success: boolean = true

    // Log the policy data to the console when "Get Quote" button is clicked
    console.log('Policy Quote:', policy);
    this.insuarnceService.createPolicy({
      emailaddress: this.emailaddress,
      name: policy.name,
      coverage: policy.coverage,
      premium: policy.premium,
      startDate: policy.startDate,
      endDate: policy.endDate,
      waitingPeriod: policy.waitingPeriod,
      networkHospitals: policy.networkHospitals,
      maternityCoverage: policy.maternityCoverage
    })
    .subscribe({
      next:(reponse)=>{
        if( success === true){
          
          window.alert(reponse.message)
          this.router.navigate(['/dashboard']);
        }
      }
    })
  }
}
