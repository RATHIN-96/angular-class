import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  title='Welcome To Angular'
  name='Rohan'

  event='';
  display(x:string){
    console.log(x)
    this.event=x
  }
  uname=''

}
