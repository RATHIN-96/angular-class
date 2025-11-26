import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor(private http:HttpClient) { }

  data_to_share:any=[]

  getData(x:any){

    console.log('*********meadia',x);

    this.data_to_share=x
    
  }

  sent_data(){
    return this.data_to_share
  }



  registerData(params:any){

    console.log(params);
    return this.http.post('http://127.0.0.1:8000/api/',params)
    
  }
  getRegData(){
    return this.http.get('http://127.0.0.1:8000/api/')
  }

  delData(x:any){

    return this.http.delete('http://127.0.0.1:8000/api/'+x+'/delete');
  }
}
