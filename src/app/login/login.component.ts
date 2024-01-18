import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username='';
  password='';

  constructor(private authService : AuthService) {};

  login() : void {
    if (this.authService.login(this.username,this.password)) {
      console.log(this.username);
      console.log(this.password);
    }
  }

 
}
