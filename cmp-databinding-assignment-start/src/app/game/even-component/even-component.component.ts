import {Component, Input, OnInit} from '@angular/core';
import {GameEventModel} from '../game-event.model';

@Component({
  selector: 'app-even-component',
  templateUrl: './even-component.component.html',
  styleUrls: ['./even-component.component.css']
})
export class EvenComponentComponent implements OnInit {

  @Input('even') evenGameEvent: GameEventModel;

  constructor() { }

  ngOnInit() {
  }

}
