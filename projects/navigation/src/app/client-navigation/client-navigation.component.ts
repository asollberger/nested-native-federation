import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-client-navigation',
  standalone: true,
    imports: [CommonModule, RouterOutlet],
  templateUrl: './client-navigation.component.html',
  styleUrl: './client-navigation.component.scss'
})
export class ClientNavigationComponent {

}
