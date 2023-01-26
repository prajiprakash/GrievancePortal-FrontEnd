import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';


@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.scss']
})
export class AddcomplaintComponent {

  productId: any;
  public Productdataarray: any;
  AddComplaintForm: FormGroup;

  

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private backendservice: BackEndServiceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id')
    })
    this.AddComplaintForm = this.fb.group({
      productId: [''],
      ProductName: [''],
      Description: [''],
      //Complaint:['']
      
    })

  }

 

  ngOnInit(): void {
    this.backendservice.getproductbaseid(this.productId).subscribe((data:any)=>{
      this.Productdataarray=data;

      console.log(data.productId,data.productName)
  
      this.AddComplaintForm.setValue({
        productId:data.productId,
        ProductName:data.productName,
        Description:data.description
      })
    })
     
   }

   onsumbit(){
    console.log(this.AddComplaintForm.value)
   }
}
