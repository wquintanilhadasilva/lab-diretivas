import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

   //@HostBinding('style.backgroundColor') backgroundColor:string;
   @HostBinding('style.backgroundColor') get setColor(){
     //Código extra - manipular antes de retornar para o DOM
     return this.backgroundColor;
   }

   private backgroundColor: string;

  constructor(
    /*private _elementRef: ElementRef,
    private _renderer: Renderer*/
  ) { }

  @HostListener('mouseenter') 
  onMouseOver(){
    /*
    um outro jeito de fazer...mais tosco!!
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }

}
