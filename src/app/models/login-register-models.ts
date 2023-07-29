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
    reason: string,
}