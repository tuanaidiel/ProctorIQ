import { EnvironmentConfiguration } from "../app/models/environment-configuration";

export const environment: EnvironmentConfiguration = {
  env_name: 'local',
  production: false,
  apiUrl: 'https://localhost:3000/api', // or any mock API
  adb2cConfig: {
    clientId: 'mock-client-id',
    readScopeUrl: 'mock-scope',
    writeScopeUrl: 'mock-scope',
    scopeUrls: ['mock-scope'],
    apiEndpointUrl: 'https://localhost:3000/api'
  },
  cacheTimeInMinutes: 30,
};