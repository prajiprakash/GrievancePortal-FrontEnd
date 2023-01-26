import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from '../back-end-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  submitted=false;

  constructor(private fb:FormBuilder,private backendserver:BackEndServiceService, private router:Router){}

  RegisterForm=this.fb.group({
    Name:['',Validators.required],
    Place:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    Phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    Username:['',Validators.required],
    Password:['',Validators.required],
    Status:['NotConfirmed']
  })

  OnSubmit(){
    this.submitted=true

    if(this.RegisterForm.invalid){

      return

    }
    console.log(this.RegisterForm.value)
    this.backendserver.insertuserdata(this.RegisterForm.value)
   // this.router.navigate(['/Home/Login'])
  }

}
