'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useState,createContext } from 'react';
import Link from 'next/link'
import { AppBar, Button, Container } from '@mui/material';
const inter = Inter({ subsets: ['latin'] })
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [money, setMoney] = useState<number>(() => {
    const storedMoney = window.localStorage.getItem('money');
    return storedMoney ? parseFloat(storedMoney) : 0;
  });
  const [moneygen, setMoneygen] = useState<number>(() => {
    const storedMoneygen = window.localStorage.getItem('moneygen');
    return storedMoneygen ? parseFloat(storedMoneygen) : 0;
  });
  const timesmoney = parseFloat(window.localStorage.getItem('timesmoney') || '0');
  const [moneyPerSecond, setMoneyPerSecond] = useState<number>(() => {
    const storedMoneyPerSecond = window.localStorage.getItem('mps ');
    return storedMoneyPerSecond ? parseFloat(storedMoneyPerSecond) : 0;
  });
  const OnClickMoney = () => {
    setMoney(prevMoney => prevMoney + timesmoney)
  } 
  useEffect(() => {
    window.localStorage.setItem('money', JSON.stringify(money));
}, [money,timesmoney]);
useEffect(() => {
  if(moneygen >= 1){
      const timer = setInterval(() => {
          setMoney(prevMoney => prevMoney + moneygen / 10 *timesmoney)
      },1000)
      return () =>  {
          clearInterval(timer)
      }
}},[moneygen])
  return (
    <html lang="en">
      <Container className={inter.className}>
        <div id="body">
        <div id="currmon">
          <Typography variant="h6">Current Money: {money.toFixed(1)}</Typography> 
          <Typography variant="h6">({moneyPerSecond}/s)</Typography>
          <Button variant="contained" color="secondary" onClick={() => OnClickMoney()}>Click for Money</Button>
        </div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color:'white'}}>
        <Toolbar>
            <Link href='/'>
            Home
            </Link>
            <Link href='/rank'>
            Rank
            </Link>
          </Toolbar>
        </AppBar>
        </Box>
        <div id="children">
          {children}
        </div>
        </div>
      </Container>
    </html>
  )
}
