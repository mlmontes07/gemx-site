interface GemxRuntimeConfig {
  DOMAIN?: string;
  HUB_DOMAIN?: string;
  HUB_URL?: string;
}

declare global {
  interface Window {
    __GEMX_CONFIG__?: GemxRuntimeConfig;
  }
}

function stripProtocol(host: string): string {
  return host.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
}

const runtimeCfg: GemxRuntimeConfig =
  typeof window !== 'undefined' && window.__GEMX_CONFIG__ ? window.__GEMX_CONFIG__ : {};

export const SITE_DOMAIN: string = stripProtocol(
  runtimeCfg.DOMAIN || import.meta.env.DOMAIN || import.meta.env.VITE_DOMAIN || 'gemx.ph',
);

export const HUB_DOMAIN: string = stripProtocol(
  runtimeCfg.HUB_DOMAIN || import.meta.env.HUB_DOMAIN || import.meta.env.VITE_HUB_DOMAIN || 'hub.gemx.ph',
);

const explicitHubUrl = (
  runtimeCfg.HUB_URL ||
  import.meta.env.HUB_URL ||
  import.meta.env.VITE_HUB_URL ||
  ''
).trim();

export const HUB_SIGN_IN_URL: string = explicitHubUrl || `https://${HUB_DOMAIN}`;

