import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyPolicyFormComponent } from './components/policy/buy-policy-form/buy-policy-form.component';
import { BuypolicyListComponent } from './components/policy/buypolicy-list/buypolicy-list.component';
import { ClaimpolicyComponent } from './components/policy/claimpolicy/claimpolicy.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: 'policyForm', component:BuyPolicyFormComponent},
  {path: 'buypolicy-lists',component:BuypolicyListComponent},
  {path: 'claim-policy', component:ClaimpolicyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
