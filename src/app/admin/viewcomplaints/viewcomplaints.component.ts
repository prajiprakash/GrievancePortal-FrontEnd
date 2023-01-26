import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrls: ['./viewcomplaints.component.scss']
})
export class ViewcomplaintsComponent implements OnInit {

  

  constructor(private backendservice:BackEndServiceService, private route:ActivatedRoute,private http:HttpClient,private fb:FormBuilder){}

  StatusForm=this.fb.group({
    DropDownStatus:['']
    
  })

  Dataarray:any[]=[];
  a:any;

  ngOnInit():void{
    this.backendservice.getcomplaintsdata().subscribe((res)=>{this.Dataarray=res;})
   // console.log(this.backendservice.getcomplaintsdata().subscribe((res)=>{this.Dataarray=res;}))
  }

  //function to change the complaint status to pending
  pending(id:any,productname:any,complaints:any,loginId:any){
        console.log(id,productname,complaints,loginId);
    this.backendservice.statuspending({complaintId:id,productname:productname,complaints:complaints,loginId:loginId,status:'Pending'})
  }


  //function to change the complaint status to completed
  completed(id:any,productname:any,complaints:any,loginId:any){
    this.backendservice.statuscompleted({complaintId:id,productname:productname,complaints:complaints,loginId:loginId,status:'Completed'})
  }

}
