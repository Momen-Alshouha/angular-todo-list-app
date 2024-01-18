import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = '';
  email='';
  password = '';
  confirmPassword='';

  constructor(private authService: AuthService) {}

  register(): void {
    if (this.authService.register(this.username, this.email,this.password,this.confirmPassword)) {
      console.log('Registration successful');
      console.log(this.username);
      console.log(this.email);
      console.log(this.password);
      console.log(this.confirmPassword);
    } else {
      console.log('Registration failed');
    }
  }
}