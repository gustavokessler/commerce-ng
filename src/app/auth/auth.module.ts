import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxAuthFirebaseUIModule,
  ]
})
export class AuthModule { }
