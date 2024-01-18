import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,ListManagerComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My To-Do List App';
}
