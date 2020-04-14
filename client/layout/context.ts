import React from 'react';

export interface LayoutContextState {
  scrollToTop: () => void;
}

const LayoutContext = React.createContext<LayoutContextState | null>(null);

export const LayoutProvider = LayoutContext.Provider;

export default LayoutContext;
