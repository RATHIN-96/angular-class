import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  constructor (private mservice :MediatorService){}

  data:any=[]

  ngOnInit():void{

    this.mservice.getRegData().subscribe(

     ( res:any)=>{
        this.data =res ['data']
        console.log('data',this.data)}

      
    )
  }

  delete(x:any){
    console.log(x);
    this.mservice.delData(x).subscribe(

      res=>{

        console.log(res);
        alert('Successfully Deleted!')
        this.ngOnInit()
        
      }
    )
    
  }
}
