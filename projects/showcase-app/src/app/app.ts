import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpButton } from 'exp-shared-ui';

@Component({
  imports: [RouterOutlet, ExpButton],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('showcase-app');
}
