import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'profile', component: ProfileComponent }
];
