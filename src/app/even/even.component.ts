import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-even",
  templateUrl: "./even.component.html",
})
export class EvenComponent implements OnInit {
  @Input() evenNumbers!: number[];

  constructor() {}

  ngOnInit(): void {}
}
