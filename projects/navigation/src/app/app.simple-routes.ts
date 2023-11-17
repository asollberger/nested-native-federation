import { Routes } from '@angular/router';
import { AccountNavigationComponent } from './account-navigation/account-navigation.component';
import { ClientNavigationComponent } from './client-navigation/client-navigation.component';

export const simpleRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accounts'},
    { path: 'accounts', component: AccountNavigationComponent },
    { path: 'clients', component: ClientNavigationComponent }
];
