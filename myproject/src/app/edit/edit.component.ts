import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';
import { Route, Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private mservice:MediatorService, public rout:Router){}
  data:any={

    name:'',
    email:'',
    place:'',
    phone:''
  };

  ngOnInit():void{
    console.log(this.mservice.editId);

    this.mservice.getDatabyid().subscribe(
      (res:any)=>{
        console.log(res);
        this.data=res.data[0]
        
      }
    )
    
  }

  update(x:any){
    console.log(x)
    this.mservice.update(x).subscribe(

      (res:any)=>{
        console.log(res);
        this.rout.navigate(['read'])
        
      }
    )
    
  }
  
}
