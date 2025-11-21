import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component {

   constructor(private mservice:MediatorService){};


  user={
    name:'',
    email:'',
    age:null
  }
  regData(data:any){
  
    console.log(data);
    this.mservice.getData(data)
    
  }



}
