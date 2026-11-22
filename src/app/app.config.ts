import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
  ],
};

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/cafd79d7-3d44-4558-8d0a-fc447fc3899f/web/EG-en-20261116-TRIFECTA-perspective_eec4be45-a40e-43df-bbec-4b5ae4cfbc1c_large.jpg';
