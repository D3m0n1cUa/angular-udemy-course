import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponentComponent } from './game/game-control-component/game-control-component.component';
import { OddComponentComponent } from './game/odd-component/odd-component.component';
import { EvenComponentComponent } from './game/even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponentComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
