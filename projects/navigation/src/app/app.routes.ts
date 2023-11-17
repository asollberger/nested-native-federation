import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { AccountNavigationComponent } from './account-navigation/account-navigation.component';
import { ClientNavigationComponent } from './client-navigation/client-navigation.component';

/*
this hack didn't work; creates a second instance of the importmap-shim, reloading the same imports which causes the following error:
Uncaught Error: Rejected map override "@angular/animations" from http://localhost:4200/_angular_animations-17_0_3-dev.js to ./_angular_animations-17_0_3-dev.js.
    at resolveAndComposePackages (es-module-shims.js:248:15)
    at resolveAndComposeImportMap (es-module-shims.js:201:7)
    at es-module-shims.js:925:23
 */
// initFederation('/assets/navigation.federation.manifest.json').then((m) => console.log('explicit remote init of the federation', m));

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accounts'},
    { path: 'accounts', component: AccountNavigationComponent, loadChildren: () => loadRemoteModule('accounts', './routes').then((m) => m.routes) },
    { path: 'clients', component: ClientNavigationComponent, loadChildren: () => loadRemoteModule('clients', './routes').then((m) => m.routes) }
];
