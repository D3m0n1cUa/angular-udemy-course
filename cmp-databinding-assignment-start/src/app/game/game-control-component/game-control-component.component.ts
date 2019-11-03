import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameEventModel} from '../game-event.model';

@Component({
  selector: 'app-game-control-component',
  templateUrl: './game-control-component.component.html',
  styleUrls: ['./game-control-component.component.css']
})
export class GameControlComponentComponent implements OnInit {

  @Output('gameEventNumber') gameEventNumber = new EventEmitter<GameEventModel>();

  interval: number;
  number: number;

  constructor() {
    this.number = 1;
  }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.gameEventNumber.emit(new GameEventModel(this.number++));
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
