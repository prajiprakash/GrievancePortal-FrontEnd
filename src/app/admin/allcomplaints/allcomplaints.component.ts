import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-allcomplaints',
  templateUrl: './allcomplaints.component.html',
  styleUrls: ['./allcomplaints.component.scss']
})
export class AllcomplaintsComponent implements OnInit {

  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private http:HttpClient){}

  Dataarray:any[]=[];

  ngOnInit():void{
    this.backendservice.showallcomplaints().subscribe((res)=>{this.Dataarray=res;})
  }

}
