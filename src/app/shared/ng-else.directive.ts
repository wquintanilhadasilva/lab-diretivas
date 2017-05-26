import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


//Diretiva de estrutura
@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }else{
      this._viewContainerRef.clear(); //destroi o elemento quando não é para exibí-lo
    }
  }

  constructor(
          private _viewContainerRef: ViewContainerRef,
          private _templateRef: TemplateRef<any> //qualquer elemento (tag)
            ) { }

}
