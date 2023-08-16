import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Pedro";
  age: number = 18;
  job = "Programmer";
  hobbies = ["Jogar", "Estudar", "Ouvir música"];
  car = {
    name: "corsa",
    year: 2022,
    motor: "v8",
  }
}
