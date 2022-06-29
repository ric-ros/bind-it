import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  isGameStarted: boolean = false;

  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<any>();
  @Output() resetGame = new EventEmitter<void>();
  @Input() anyNumber!: boolean;

  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.gameStarted.emit();
    this.isGameStarted = true;
  }

  onGameStop() {
    this.gameStopped.emit();
    this.isGameStarted = false;
  }

  onResetGame() {
    this.resetGame.emit();
    this.isGameStarted = false;
  }
}
