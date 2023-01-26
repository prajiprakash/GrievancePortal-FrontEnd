import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {

  constructor(private backendservice:BackEndServiceService){}

  Dataarray: any[] = [];

  ngOnInit():void{
    this.backendservice.getproductdata().subscribe((res)=>{
      this.Dataarray=res;
    })
  }


}
