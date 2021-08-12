import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  color: string = "primary";
  buttonDisabled = true;
  colors = ['primary', 'accent', 'sucess', 'warn'];
  idx= 0;
  clicks = 0;
  progressValue = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx+1) % this.colors.length;
    },1000);
  }

  incClick(): void {
    this.clicks++;
    this.progressValue = 2 * this.clicks;
  }

  disabled(): void {
    this.buttonDisabled = false;
    setTimeout(() => {
      this.buttonDisabled = true;
    }, 2000);

  }

}
