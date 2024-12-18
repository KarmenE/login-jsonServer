import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stopandcode2-con-json-server';

  isLogged(): boolean {
    return localStorage.getItem('token_labforweb') ? true : false
  }

  logout(): void {
    localStorage.removeItem('token_labforweb');
  }
}
