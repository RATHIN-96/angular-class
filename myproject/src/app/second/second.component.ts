import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  x=true
  // x=false
  user=[
    {id:1,name:'Ammu',place:'kozhikode'},
    {id:2,name:'Anu',place:'kozhikode'},
    {id:3,name:'Aju',place:'kozhikode'},
    {id:4,name:'Abu',place:'kozhikode'},
    {id:5,name:'Ambu',place:'kozhikode'},
    {id:6,name:'Achu',place:'kozhikode'},
  ]

  d=6

  color1='blue'
  is_highlited=true;
  
  toogle(){

    this.is_highlited=!this.is_highlited
  }

}
