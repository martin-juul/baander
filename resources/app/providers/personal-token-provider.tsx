import React, { useEffect, useState } from 'react';
import { makeVar } from '@apollo/client';
import { noop } from '@/support/noop.ts';

export const tokenVar = makeVar<string | null>(null);

interface PersonalTokenContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const PersonalTokenContext = React.createContext<PersonalTokenContextType>({
  token: null,
  setToken: () => noop(),
});
PersonalTokenContext.displayName = 'PersonalTokenContext';

export function PersonalTokenProvider({children}: { children: React.ReactNode }) {
  const [token, _setToken] = useState<string | null>(null);

  useEffect(() => {
    tokenVar(token);
  }, [token]);

  const setToken = (token: string | null)=> {
    _setToken(token);
  }

  return (
    <PersonalTokenContext.Provider
      value={{ token, setToken }}
    >{children}</PersonalTokenContext.Provider>
  );
}
