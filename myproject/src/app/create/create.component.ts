import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

constructor(private mservice:MediatorService){}

    regData(data:any){
  
    console.log(data);
    
    
  }
}
