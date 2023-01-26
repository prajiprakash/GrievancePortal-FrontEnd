import { Component, OnInit } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {

  constructor(private backendservice:BackEndServiceService){}

  Dataarray:any[]=[];

  ngOnInit():void{
    
    this.backendservice.getproductdata().subscribe((res)=>{
      this.Dataarray=res;
    })

  }

}
