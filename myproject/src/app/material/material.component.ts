import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  constructor(private translt:TranslateService){}

  switchlan(lang:any){

      console.log(lang);
      
    this.translt.setDefaultLang(lang)
  }

}


