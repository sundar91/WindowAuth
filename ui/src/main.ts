import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

export function getBaseUrl() {
  return environment.apiUrl;
}

const providers = [
  { provide: 'API_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
