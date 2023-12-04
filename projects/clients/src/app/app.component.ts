import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { getRemoteParent } from './host-attributes';

export * from './host-attributes';

@Component({
    selector: 'cli-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    host: { remoteParent: getRemoteParent() }
})
export class AppComponent {
    constructor() {
        console.log(getRemoteParent());
    }
    title = 'clients';
}
