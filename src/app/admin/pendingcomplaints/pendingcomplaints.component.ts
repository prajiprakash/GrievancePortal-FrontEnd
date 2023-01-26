import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-pendingcomplaints',
  templateUrl: './pendingcomplaints.component.html',
  styleUrls: ['./pendingcomplaints.component.scss']
})
export class PendingcomplaintsComponent implements OnInit {

  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private http:HttpClient,private fb:FormBuilder) {}

  Dataarray:any[]=[];

  ngOnInit():void{
    this.backendservice.getpendingcomplaints().subscribe((res)=>{this.Dataarray=res;})
  }

  
  completed(id:any,productname:any,complaints:any,loginId:any){
    this.backendservice.statuscompleted({complaintId:id,productname:productname,complaints:complaints,loginId:loginId,status:'Completed'})
  }

}
