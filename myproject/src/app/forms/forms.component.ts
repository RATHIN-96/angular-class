import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  reactform:FormGroup

  display(data:any){
    console.log('...........',data);
    
  }

  constructor(private formbuild:FormBuilder){

    this.reactform=formbuild.group({

      n:['',Validators.required],
      e:['',Validators.required],
      a:['',Validators.required]


    })
  }
}
