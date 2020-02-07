import { Component } from '@angular/core';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'LoginApp';
  
  userIngresado: User = new User();

  isLogin(){
    console.log(this.userIngresado);
    this.userIngresado = new User();  
    
  }



}
