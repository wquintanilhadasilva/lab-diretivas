import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @Input()
  defaultColor: string = 'white';

  @Input('highlight') //mesmo nome da diretiva, evita escrver muito no código
  highlightColor: string = 'yellow'

  @HostBinding('style.backgroundColor')
   _background: string;
  
  constructor() { }

  ngOnInit(){
    this._background = this.defaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this._background = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this._background = this.defaultColor;
  }

}
