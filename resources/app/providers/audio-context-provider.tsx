import React, { useContext, useState } from 'react';

interface AudioContextType {
  audioContext: AudioContext | null;
}

export const AppAudioContext = React.createContext<AudioContextType>({
  audioContext: null,
});
AppAudioContext.displayName = 'AppAudioContext';

export const useAudioContext = () => useContext(AppAudioContext);

export function AppAudioContextProvider({children}: { children: React.ReactNode }) {
  const [audioContext] = useState<AudioContext>(new AudioContext());

  return (
    <AppAudioContext.Provider value={{audioContext}}>
      {children}
    </AppAudioContext.Provider>
  );
}
