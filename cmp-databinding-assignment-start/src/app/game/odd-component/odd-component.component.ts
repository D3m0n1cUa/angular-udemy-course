import {Component, Input, OnInit} from '@angular/core';
import {GameEventModel} from '../game-event.model';

@Component({
  selector: 'app-odd-component',
  templateUrl: './odd-component.component.html',
  styleUrls: ['./odd-component.component.css']
})
export class OddComponentComponent implements OnInit {

  @Input('odd') oddGameEvent: GameEventModel;

  constructor() { }

  ngOnInit() {
  }

}
