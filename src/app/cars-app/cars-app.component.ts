import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cars-app',
  templateUrl: './cars-app.component.html',
  styleUrls: ['./cars-app.component.css']
})
export class CarsAppComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.carsData().subscribe(
      (data)=>{
        this.carList=data
      }
    )
  }
  
  carList:any={}
  ngOnInit(): void {
  }

}
