'use client'
import './globals.css'
import * as React from 'react';
import { Providers } from "./redux2/provider";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux2/store';
import { store } from './redux2/store';
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={ persistor }>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
