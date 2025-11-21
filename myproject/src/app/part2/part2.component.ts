import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {

  constructor(private mservice:MediatorService){}

  mdata:any=[]

  ngOnInit():void{

    this.mdata=this.mservice.sent_data()

    console.log('part2',this.mdata);
    
  }

}
