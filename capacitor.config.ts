import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'my angular ionic',
  webDir: 'www',
  ios: {
    limitsNavigationsToAppBoundDomains: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      launchShowDuration: 0,
    },
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
