import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDetails, RegisterDetails } from '../models/login-register-models';
import { BuyPolicyDetails } from '../models/buyPolicy-model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {

  private apiURL = `http://localhost/4200/api/`
  constructor(
    private http: HttpClient
  ) { }


  loginDetails(login:LoginDetails){
    console.log(`Logging the login data ${JSON.stringify(login)}`);
    
    return this.http.post<{
      success: Boolean;
      message:string;
      data:any
    }>(`${this.apiURL}login`,login)
  }

  registrationDetails(register:RegisterDetails){
    console.log(`Logging the register data ${JSON.stringify(register)}`);    

    return this.http.post<{
      success: Boolean;
      message:string;
      data:any
    }>(`${this.apiURL}register`,register)
  }

  buyPolicyDetails(buypolicydetails:BuyPolicyDetails){
    console.log(`Logging the register data ${JSON.stringify(buypolicydetails)}`);    

    return this.http.post<{
      success: Boolean;
      message:string;
      data:any
    }>(`${this.apiURL}buy-policy`,buypolicydetails)
  }
}
