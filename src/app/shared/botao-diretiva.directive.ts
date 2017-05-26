import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'button[botaoDiretiva]'
})
export class BotaoDiretivaDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer) {
    //this._elementRef.nativeElement.style.backgroundColor = 'cyan';
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'cyan');
  }

}
