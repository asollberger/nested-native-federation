import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    { path: 'home', loadComponent: () => loadRemoteModule('home', './Component').then((m) => m.AppComponent) },
    { path: 'navigation', loadComponent: () => loadRemoteModule('navigation', './Component').then((m) => m.AppComponent) },

    { path: 'nav', loadChildren: () => loadRemoteModule('navigation', './routes').then((m) => m.routes) },
    { path: 'nav-simple', loadChildren: () => loadRemoteModule('navigation', './simple-routes').then((m) => m.simpleRoutes) },

    // directly linked and called
    { path: 'account', loadComponent: () => loadRemoteModule('accounts', './Component').then((m) => m.AppComponent) },
    { path: 'client', loadComponent: () => loadRemoteModule('clients', './Component').then((m) => m.AppComponent) }
];
