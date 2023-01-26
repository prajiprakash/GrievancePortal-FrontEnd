import { Component, OnInit } from '@angular/core';

import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent implements OnInit {


  constructor(private backendservice: BackEndServiceService) {

  }

  Dataarray: any[] = [];

  ngOnInit(): void {
    this.backendservice.getUserdata().subscribe((res) => {
      this.Dataarray = res;
     
    })
  }

  confirm(id:any,name:any,place:any,email:any,phone:any,username:any,password:any){
    console.log(id);
    this.backendservice.confirmuser({loginId:id,name:name,place:place,email:email,phone:phone,username:username,password:password,status:'confirmed'})
  }

}

