/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DOMAIN?: string;
  readonly HUB_DOMAIN?: string;
  readonly HUB_URL?: string;
  readonly VITE_DOMAIN?: string;
  readonly VITE_HUB_DOMAIN?: string;
  readonly VITE_HUB_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
