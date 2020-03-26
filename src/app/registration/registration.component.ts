import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,PatternValidator} from '@angular/forms'
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  title = 'ReactiveFormDemo';
  submitted = false;
  public fobj:FormBuilder;
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    address: ' ' ,
    phone: ' ',  
  };
  constructor(private auth: AuthenticationService, private router: Router)
  {

  }
  CodevianForm=this.fobj.group(
    {
      name:['',[Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone:[null,Validators.required,Validators.pattern("[0-9]{0-10}")],
      address:['',[Validators.required,Validators.minLength(25)]]

    }
  )
  /*onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.CodevianForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CodevianForm.value, null, 4));
}*/


register() {
  this.auth.register(this.credentials).subscribe(() => {
    this.router.navigateByUrl('/user-info');
  }, (err) => {
    console.error(err);
  });
}
}

