import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { routes } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading, RouterLink, RouterOutlet, withDebugTracing } from '@angular/router';

  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      provideRouter(routes, withPreloading(PreloadAllModules), withDebugTracing())
    ]
  });