import { InjectionToken, inject } from '@angular/core';
import { ENVIRONMENT } from './environment.token';
import { Config } from '../models/config.model';

export const CONFIG = new InjectionToken<Config>('CONFIG', {
  providedIn: 'root',
  factory: () => ({
    env: inject(ENVIRONMENT)
  })
});