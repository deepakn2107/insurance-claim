import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BuyPolicyFormComponent } from './components/policy/buy-policy-form/buy-policy-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuypolicyListComponent } from './components/policy/buypolicy-list/buypolicy-list.component';
import { ClaimpolicyComponent } from './components/policy/claimpolicy/claimpolicy.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    BuyPolicyFormComponent,
    BuypolicyListComponent,
    ClaimpolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 