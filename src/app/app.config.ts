import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { provideHttpClient } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { routes } from './app.routes';

// Import common icons from ng-zorro
import {
  MenuOutline,
  CloseOutline,
  MailOutline,
  InstagramOutline,
  BehanceOutline,
  PinterestOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuOutline,
  CloseOutline,
  MailOutline,
  InstagramOutline,
  BehanceOutline,
  PinterestOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNzI18n(en_US),
    provideNzIcons(icons),
  ],
};
