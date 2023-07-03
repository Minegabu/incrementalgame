'use client'
import './globals.css'
import * as React from 'react';
import { Providers } from "./redux2/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Providers>{children}</Providers>
    </html>
  );
}
