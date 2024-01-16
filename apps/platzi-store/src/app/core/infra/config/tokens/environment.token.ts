import { InjectionToken } from '@angular/core';
import { Environment } from '../models/environment.model';

// TODO: Provide value from ENV variables
export const ENVIRONMENT = new InjectionToken<Environment>('ENVIRONMENT', {
  providedIn: 'root',
  factory: () => ({
    platziHttpApiUrl: 'https://api.escuelajs.co/api/v1'
  })
});