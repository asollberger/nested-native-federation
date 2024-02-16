import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShellService } from './shell.service';
import { environment } from '../environments/environment';

@Component({
    selector: 'sh-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'shell';
    activity: any = null;
    isProduction: boolean = environment.production;

    constructor(private _shellService: ShellService) {}

    nextActivity() {
        this._shellService.getActivity().subscribe(({ activity }) => (this.activity = activity));
    }
}
