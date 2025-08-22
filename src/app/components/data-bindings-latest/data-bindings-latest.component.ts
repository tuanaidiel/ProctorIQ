import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindings-latest',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-bindings-latest.component.html',
  styleUrl: './data-bindings-latest.component.css'
})
export class DataBindingsLatestComponent {
  appName = 'SmartCertify';
  username: string | null = null;
  isWelcomeVisible = true;

  toggleWelcome() {
    this.isWelcomeVisible = !this.isWelcomeVisible;
  }
}
