import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AlertModule } from 'ngx-bootstrap';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { TokenInterceptorService } from './token-interceptor.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user-info', component: UserInfoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,          // Add names of modules
    HttpClientModule,
    ReactiveFormsModule,AlertModule.forRoot(),
    RouterModule.forRoot(routes),

  ],
  providers: [AuthenticationService, AuthGuard, 
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  