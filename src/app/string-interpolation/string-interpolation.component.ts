import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "José Julio";
  person = {
    firstName : "José Julio",
    lastName : "Umbelino",
    age : 25,
    job: "Desenvolvedor full stack"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
