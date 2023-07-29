export interface LoginDetails{
    email:string;
    password:string;
} 

export interface RegisterDetails{
    // {"firstname":"Deepak","lastname":"N","email":"deepakng2199@gmail.com","password":"Password@123"}
    firstname:string;
    lastname:string;
    email:string;
    password:string;

}

export interface ClaimPolicy{
    policyNumber: string,
    claimAmount: number,
    claimerName:string,
    reason: string,
    claimDate:string
    
}

export interface CreatePolicy{
    emailaddress:string,
    name: string,
      coverage: number,
      premium: number,
      startDate: string,
      endDate: string,
      waitingPeriod: number,
      networkHospitals: number,
      maternityCoverage: boolean
}