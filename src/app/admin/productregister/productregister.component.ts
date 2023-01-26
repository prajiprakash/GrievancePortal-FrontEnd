import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-productregister',
  templateUrl: './productregister.component.html',
  styleUrls: ['./productregister.component.scss']
})
export class ProductregisterComponent {

  constructor(private fb:FormBuilder,private backendservice:BackEndServiceService,private router:Router) {}

  ProductRegisterForm=this.fb.group({
    ProductName:[''],
    Description:['']
  })

  OnSubmit(){
    this.backendservice.insertproductdata(this.ProductRegisterForm.value)
    //this.router.navigate(['/adminhome/viewproduct'])
  }

}
