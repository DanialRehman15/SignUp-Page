import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email = 'vlockn@gmail.com';
  password = 123456;

  constructor(){
    this.email;
    this.password;
  }
}
