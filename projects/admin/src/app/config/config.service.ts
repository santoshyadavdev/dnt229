import { InjectionToken } from '@angular/core';
import { AppConfig } from './config';
import { environment } from '../../environments/environment';


export const AppConfigService = new InjectionToken<AppConfig>('app config');

export const ConfigValue: AppConfig = {
    apiEndPoint: environment.apiEndPoint,
    title: environment.title
};

export const windowService = new InjectionToken('native window',
    {
        factory: () => window,
        providedIn: 'root'
    });


export const seesionStorageService = new InjectionToken('native sesssion storage',
    {
        factory: () => sessionStorage,
        providedIn: 'root'
    });
