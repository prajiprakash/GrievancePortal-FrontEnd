import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-registercomplaint',
  templateUrl: './registercomplaint.component.html',
  styleUrls: ['./registercomplaint.component.scss']
})
export class RegistercomplaintComponent implements OnInit {
  
  Dataarray: any[] = [];
  Product:any[]=[];
  a: any;
  
  

  constructor(private backendservice: BackEndServiceService, private route: ActivatedRoute,private http:HttpClient,private fb:FormBuilder) { }
  
  ComplaintForm=this.fb.group({
    Productname:[''],
    Complaints:[''],
    LoginId:[''],
    Status:['NotChecked']
  })
  
  onsubmit(){
    console.log(this.ComplaintForm.value)
    this.ComplaintForm.value.LoginId=this.a;
    this.backendservice.insertcomplaintdata(this.ComplaintForm.value)
    
    
  }



  ngOnInit(): void {
    this.backendservice.getproductdata().subscribe((res) => {
      this.Dataarray = res;
      this.a=parseInt(localStorage.getItem("id")!)
      
    
    });

   
  }

  
}
