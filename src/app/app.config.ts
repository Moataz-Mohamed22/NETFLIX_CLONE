
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from '@openng/ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true
    }),

    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration()
  ],
};

export const BG_URL =
  'https://assets.nflxext.com/ffe/siteui/vlv3/cafd79d7-3d44-4558-8d0a-fc447fc3899f/web/EG-en-20261116-TRIFECTA-perspective_eec4be45-a40e-43df-bbec-4b5ae4cfbc1c_large.jpg';
