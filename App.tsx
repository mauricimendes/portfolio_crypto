import React from 'react'
import { ThemeProvider } from './src/hooks/theme'

import Home from './src/home'

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}