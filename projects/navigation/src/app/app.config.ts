import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { simpleRoutes } from './app.simple-routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter([...routes, ...simpleRoutes])]
};
