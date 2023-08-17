import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Pedro Henrique';
  
  userData = {
    email: "pedrohenrique@gmail.com",
    role: "Dev Front End"
  };
  
  userTask = {
    taskOne: 'Task condicional',
    taskTwo: 'Task de verificação de API'
  };
  
  title = 'angular-course';
}
