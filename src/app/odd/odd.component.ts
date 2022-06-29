import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-odd",
  templateUrl: "./odd.component.html",
})
export class OddComponent implements OnInit {
  @Input() oddNumbers!: number[];

  constructor() {}

  ngOnInit(): void {}
}
