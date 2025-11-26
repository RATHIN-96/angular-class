import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

constructor(private mservice:MediatorService,public rout:Router){}




    regData(data:any){
  
    console.log(data);
    this.mservice.registerData(data).subscribe(
      res=>{
        alert('Success')
        console.log(res);
        this.rout.navigate(['read'])
        
      }    )
    
    
  }
}
