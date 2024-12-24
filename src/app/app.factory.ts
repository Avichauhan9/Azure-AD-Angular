import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
} from '@azure/msal-angular';
import {
  AZURE_AD_AUTHORITY_URL,
  AZURE_AD_CLIENT_ID,
  AZURE_AD_REDIRECT_URI,
  AZURE_AD_SCOPE_URI,
  AZURE_AD_SCOPES,
} from '../environments/environment';

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: AZURE_AD_CLIENT_ID,
      authority: AZURE_AD_AUTHORITY_URL,
      redirectUri: AZURE_AD_REDIRECT_URI,
      postLogoutRedirectUri: '/',
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    system: {
      allowNativeBroker: false, // Disables WAM Broker
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(AZURE_AD_SCOPE_URI, AZURE_AD_SCOPES);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: AZURE_AD_SCOPES,
    },
    loginFailedRoute: '/login-failed',
  };
}
