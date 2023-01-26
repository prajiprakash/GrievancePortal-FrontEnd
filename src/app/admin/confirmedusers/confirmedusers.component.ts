import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-confirmedusers',
  templateUrl: './confirmedusers.component.html',
  styleUrls: ['./confirmedusers.component.scss']
})
export class ConfirmedusersComponent implements OnInit {

  constructor(private backendservice:BackEndServiceService){}

  Dataarray: any[] = [];

  ngOnInit():void{
    this.backendservice.getconfirmeduserdata().subscribe((res)=>{
      this.Dataarray=res;
    })

   
  }


  remove(id:any,name:any,place:any,email:any,phone:any,username:any,password:any){
    console.log(id);
    this.backendservice.removeuser({loginId:id,name:name,place:place,email:email,phone:phone,username:username,password:password,status:'NotConfirmed'})
  }


}
