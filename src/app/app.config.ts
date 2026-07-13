import { ApplicationConfig, APP_INITIALIZER, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ThemeService } from './services/theme.service';

function initTheme(): () => void {
  return () => {
    inject(ThemeService);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: APP_INITIALIZER, useFactory: initTheme, multi: true },
  ],
};
