'use client'
import '../globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useState,createContext } from 'react';
import Link from 'next/link'
import { AppBar, Button, Container } from '@mui/material';
const inter = Inter({ subsets: ['latin'] })
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { decrement, increment, reset,incrementByAmount } from "../redux2/counter";
import { useAppDispatch, useAppSelector } from "../redux2/hooks";
import { Providers } from "../redux2/provider";
import { incrementBigMoneygen,incrementMoneygenbyamount } from '../redux2/countergen';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const money = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const moneygen = useAppSelector((state) => state.countergenReducer.moneygen)
  const bigmoneygen = useAppSelector((state) => state.countergenReducer.bigmoneygen)
  const [moneyPerSecond, setMoneyPerSecond] = useState<number>(() => {
    const storedMoneyPerSecond = window.localStorage.getItem('mps ');
    return storedMoneyPerSecond ? parseFloat(storedMoneyPerSecond) : 0;
  });

   useEffect(() => {
    if (moneygen >= 1) {
      const timer = setInterval(() => {
        dispatch(incrementByAmount(moneygen / 10 * timesmoney));
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [moneygen]);
  /** */
  return (
    <body>
      <Providers>
          <Container className={inter.className}>
            <div id="body">
            <div id="currmon">
              <Typography variant="h6">Current Money: {money.toFixed(1)}</Typography>
              <Typography variant="h6">({moneyPerSecond}/s)</Typography>
                <Button variant="contained" color="secondary" onClick={() => dispatch(increment())}>
                  Click for Money
                </Button>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" sx={{ color: 'white' }}>
                <Toolbar>
                  <Link href="/app">Home</Link>
                  <Link href="/app/rank">Rank</Link>
                </Toolbar>
              </AppBar>
            </Box>
            <div id="children">
              {children}
            </div>
          </div>
         </Container>
        </Providers>
    </body>
  );
}
