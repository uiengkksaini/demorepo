import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AuthcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth';
}
