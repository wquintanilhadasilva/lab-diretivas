import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'h2[fundoAmarelo]' //determina o elemento em que a diretiva deva ser aplicada
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
  }

}
