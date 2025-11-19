import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  user={
    name:'',
    email:'',
    age:null
  }
  submitted=false

  onsubmit(x:any){
    this.submitted=true
    console.log(x);
    alert(`Submitted By ${this.user.name}`)
    
  }

}
