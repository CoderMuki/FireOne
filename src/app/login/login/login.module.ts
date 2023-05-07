import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutes } from './login.routing';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutes,
    MaterialModule
  ]
})
export class LoginModule { }
