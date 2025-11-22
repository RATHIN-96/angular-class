import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() { }

  data_to_share:any=[]

  getData(x:any){

    console.log('*********meadia',x);

    this.data_to_share=x
    
  }

  sent_data(){
    return this.data_to_share
  }

  x:any=[]

  registerData(params:any){

    console.log(params);
    return this.x=this.registerData
    
  }
}
