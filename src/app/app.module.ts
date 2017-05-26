import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentSeletorComponent } from './ng-content-seletor/ng-content-seletor.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { BotaoDiretivaDirective } from './shared/botao-diretiva.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    NgContentSeletorComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    BotaoDiretivaDirective,
    HighlightMouseDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
