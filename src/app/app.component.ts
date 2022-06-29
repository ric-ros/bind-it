import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Output,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements DoCheck, AfterViewChecked {
  refInterval: any;
  counter: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  anyNumbers: boolean = false;
  gameStarted?: boolean;

  @ViewChild("scrollable") scrollDiv!: ElementRef<HTMLDivElement>;

  constructor(private cd: ChangeDetectorRef) {}

  onGameStarted() {
    this.refInterval = setInterval(() => {
      if (this.counter % 2 != 0) this.oddNumbers.push(this.counter++);
      else this.evenNumbers.push(this.counter++);
    }, 1000);

    this.gameStarted = true;
  }

  onGameStopped() {
    clearInterval(this.refInterval);
    this.counter ??= 0;

    this.gameStarted = false;
  }

  onGameReset() {
    clearInterval(this.refInterval);
    this.oddNumbers = [];
    this.evenNumbers = [];
    this.counter = 0;

    this.gameStarted = undefined;
  }

  ngDoCheck(): void {
    this.anyNumbers =
      this.oddNumbers.length !== 0 || this.evenNumbers.length !== 0;
  }

  ngAfterViewChecked(): void {
    try {
      this.scrollDiv.nativeElement.scrollTop =
        this.scrollDiv.nativeElement.scrollHeight;

      this.cd.detectChanges();
    } catch (error) {}
  }
}
