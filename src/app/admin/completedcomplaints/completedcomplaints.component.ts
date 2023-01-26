import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-completedcomplaints',
  templateUrl: './completedcomplaints.component.html',
  styleUrls: ['./completedcomplaints.component.scss']
})
export class CompletedcomplaintsComponent implements OnInit {

  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private http:HttpClient){}
  Dataarray:any[]=[];

  ngOnInit():void{
    this.backendservice.getcompletedcomplaints().subscribe((res)=>{this.Dataarray=res;})
  }
}
