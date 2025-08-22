// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";




const serverUrl='https://smartcertify-api.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
  adb2cConfig: {
    clientId: 'c027eec5-9ef7-4749-8d18-712f0c400667',
    readScopeUrl: 'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Read',
    writeScopeUrl: 'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Write',
    scopeUrls:[
      'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Read',
      'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Write'
    ],
    apiEndpointUrl: 'https://smartcertify-api.azurewebsites.net/api'
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
