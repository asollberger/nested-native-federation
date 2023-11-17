import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-account-navigation',
  standalone: true,
    imports: [CommonModule, RouterOutlet],
  templateUrl: './account-navigation.component.html',
  styleUrl: './account-navigation.component.scss'
})
export class AccountNavigationComponent {

}
