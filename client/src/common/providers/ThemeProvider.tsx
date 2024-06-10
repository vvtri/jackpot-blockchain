import React, { PropsWithChildren } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'next-themes';

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProviderBase
      defaultTheme="white"
      enableSystem={false}
      attribute="class"
    >
      {children}
    </ThemeProviderBase>
  );
}
