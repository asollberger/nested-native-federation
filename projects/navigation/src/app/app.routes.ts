import { Routes } from '@angular/router';
import { loadRemoteModule, processRemoteInfo } from '@angular-architects/native-federation';
import { NavigationComponent } from './navigation/navigation.component';

let manifestLoaded = false;
async function loadRemoteModuleAfterManifest<T = any>(remoteName: string, exposedModule: string): Promise<T> {
    await (manifestLoaded
        ? Promise.resolve()
        : fetch('/assets/federation.manifest.json')
              .then((manifest) => manifest.json())
              .then((manifestRemotes: Record<string, string>) =>
                  Promise.allSettled(
                      Object.entries(manifestRemotes).map(([federationRemoteName, federationInfoUrl]) =>
                          processRemoteInfo(federationInfoUrl, federationRemoteName)
                      )
                  )
              )
              .then(() => (manifestLoaded = true)));
    return await loadRemoteModule(remoteName, exposedModule);
}

export const routes: Routes = [
    {
        path: '',
        component: NavigationComponent,
        children: [
            { path: 'accounts', loadChildren: () => loadRemoteModuleAfterManifest('accounts', './routes').then((m) => m.routes) },
            { path: 'clients', loadChildren: () => loadRemoteModuleAfterManifest('clients', './routes').then((m) => m.routes) }
        ]
    }
];
