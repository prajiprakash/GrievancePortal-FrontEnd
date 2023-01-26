import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from '../back-end-service.service';
import { Inject,Injectable } from '@angular/core';
//import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

 

// @Injectable()
// export class MyService {
//   constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitted=false;
sess:any;
  public Loginstatus = false;
  isUserValid: boolean = false;
  LoginFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private backendservice: BackEndServiceService) {
    this.LoginFormGroup = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }



  OnSubmit() {
    this.submitted=true

    if(this.LoginFormGroup.invalid){

      return

    }
    if (this.LoginFormGroup.value.username == 'Admin' && this.LoginFormGroup.value.password == 'Admin') {
      this.router.navigate(['adminhome/productregister'])
    }
    else {
      //this.Loginstatus=true;
      this.backendservice.login([this.LoginFormGroup.value.username,
      this.LoginFormGroup.value.password]).subscribe(res => {
        //console.log(res);
        console.log(this.LoginFormGroup.value.username)
        if (res == 'Failed') {
          this.isUserValid = false;
          alert('Login Unsuccessful');
        } else {
          this.isUserValid = true;
          //console.log(res)
          
          let obj=JSON.parse(res);
          this.sess=obj.loginId;
          // this.sess=res.charAt(11);
          // console.log(this.sess);
          localStorage.setItem('id',this.sess);
          alert("Login Success");
          this.router.navigate(['userhome'])
        }
      });
    }
  }
}




