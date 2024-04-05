import { localStorage } from '@/services/local-storage.ts';

export const Auth = {
  get: (): Token | null => {
    const token = localStorage.getToken();

    if (isToken(token)) {
      return token;
    }

    return null;
  },
  remove(value: unknown) {
    localStorage.setToken(value);
  },
  clear() {
    localStorage.clearToken();
  },
  isExpired() {
    const now = Date.now() / 1000;

    return Number(this.get()?.access_token || 0) <= now;
  },
  isAuthenticated() {
    return Boolean(this.isExpired());
  }
};

export interface Token {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export function isToken(value: unknown): value is Token {
  return value !== null && typeof value === 'object' && Object.hasOwn(value, 'access_token');
}
