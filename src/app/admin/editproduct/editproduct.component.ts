import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit  {
 
  productId:any;
  public Productdataarray:any;
  EditProductForm:FormGroup;

  constructor(private route:ActivatedRoute,private fb:FormBuilder,private backendservice:BackEndServiceService,private router:Router)
  {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.productId=params.get('id')
    })
    this.EditProductForm=this.fb.group({
      productId:[''],
      ProductName:[''],
      Description:['']
    })

  }

 ngOnInit(): void {
  this.backendservice.getproductbaseid(this.productId).subscribe((data:any)=>{
    this.Productdataarray=data;

    this.EditProductForm.setValue({
      productId:data.productId,
      ProductName:data.productName,
      Description:data.description
    })
  })
   
 }
 
 OnSubmit(){
    this.backendservice.updateproductdata(this.EditProductForm.value)
   
 }

 Onsubmitdelete(){
  this.backendservice.deleteproductdata(this.EditProductForm.value)
 
 }
  


}
