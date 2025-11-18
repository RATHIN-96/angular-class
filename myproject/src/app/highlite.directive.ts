import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {

  @Input() set appHighlite(value:string){

    this.applyColor(value||'red')
  }

  constructor(private el:ElementRef,private render:Renderer2) { }
  private applyColor(color:string){
    this.render.setStyle(this.el.nativeElement,'color',color)
  }
  

}
