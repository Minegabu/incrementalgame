'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Typography,Button } from '@mui/material';

const Home = () => {

    // When adding a new rank reset/feature
    // first add the set consts
    // then add the function for the button
    // then get/add it to the local storage
    // create the button

    // storing money
    const [money, setMoney] = useState<number>(Number);
    const [moneygen,setMoneygen] = useState<number>(Number);
    const [bigmoneygen, setBigMoneygen] = useState<number>(Number);
    // storing amount of ranks
    const [rank, setRank] = useState<number>(1)
    const [timesmoney,setTimesMoney] = useState<number>(1)
    const [rankPoint, setRankPoint] = useState<number>(() => {
        const storedRankPoint = window.localStorage.getItem('rankPoint');
        return storedRankPoint ? parseFloat(storedRankPoint) : 0;
      });
    const [moneypersecond,setMoneyPerSecond] = useState(moneygen/10 * timesmoney)
    // Buy Money gen
    const OnClickMoneyGen = () => {
        if(money >= 10**1.2*moneygen){
            setMoneygen(prevMoneygen => prevMoneygen + 1)
            setMoney(prevMoney => prevMoney - 10**1.2*moneygen)
            setMoneyPerSecond(prevmoneypersecond => prevmoneypersecond + moneygen / 10 *timesmoney)
        }
    }
    //Buy Big Money gen
    const OnBigMoneygen = () => {
        if(rankPoint >= 10){
            setBigMoneygen(prevBigMoneygen => prevBigMoneygen + 1)
            setRankPoint(prevRankPoint => prevRankPoint - 10)
            setMoneyPerSecond(prevmoneypersecond => prevmoneypersecond +(bigmoneygen / 10*1.4 - (bigmoneygen-1 / 10*1.4)))
        }
    }

    // Getting all the variables after refresh
    useEffect(() => {
        const storedMoney = window.localStorage.getItem('money');
        const storedMoneygen = window.localStorage.getItem('moneygen');
        const storedRank = window.localStorage.getItem('rank');
        const storedTimesMoney = window.localStorage.getItem('timesmoney')
        const storedBigMoneygen = window.localStorage.getItem('bigmoneygen')
        const storedRankPoint = window.localStorage.getItem('rankpoint')
        if (storedTimesMoney !== null){
            setTimesMoney(JSON.parse(storedTimesMoney))
        }
        if (storedMoney !== null) {
          setMoney(JSON.parse(storedMoney));
        }
      
        if (storedMoneygen !== null) {
          setMoneygen(JSON.parse(storedMoneygen));
        }
      
        if (storedRank !== null) {
          setRank(JSON.parse(storedRank));
        }
        if (storedBigMoneygen !== null) {
            setBigMoneygen(JSON.parse(storedBigMoneygen));
          }
          if (storedRankPoint !== null) {
            setRankPoint(JSON.parse(storedRankPoint));
          }
      }, []);
    // storing all the variables before reset
    useEffect(() => {
        window.localStorage.setItem('money', JSON.stringify(money));
        window.localStorage.setItem('moneygen', JSON.stringify(moneygen));
        window.localStorage.setItem('rank', JSON.stringify(rank));
        window.localStorage.setItem('timesmoney', JSON.stringify(timesmoney))
        window.localStorage.setItem('bigmoneygen', JSON.stringify(bigmoneygen))
        window.localStorage.setItem('rankpoint', JSON.stringify(rankPoint))
        window.localStorage.setItem('mps',JSON.stringify(moneypersecond))
    }, [money,moneygen,rank,timesmoney, bigmoneygen, rankPoint]);
    // Make it so every second you gain money from your money gens
    useEffect(() => {
        if(moneygen >= 1){
            const timer = setInterval(() => {
                setMoney(prevMoney => prevMoney + moneygen / 10 *timesmoney)
                setMoneyPerSecond(moneygen / 10 *timesmoney)
            },1000)
            return () => {
                clearInterval(timer)
            }
}},[moneygen])
//Make it so money gens are earned every second from Big Money gens
useEffect(() => {
    if(bigmoneygen >= 1){
        const timer = setInterval(() => {
            setMoneygen(prevMoneygen => prevMoneygen + bigmoneygen / 10*1.4)
        },1000)
        return () => {
            clearInterval(timer)
        }
}},[moneygen])

    // Return the html of the website
    // To edit css go to globals.css
    return (
        <div>
            <Typography>Money Generators: {moneygen.toFixed(1)} </Typography> 
            <Button variant="contained" color="secondary" onClick = {() => OnClickMoneyGen()}>Buy Money Generators</Button>
            <Typography>Big Money Generators: {bigmoneygen.toFixed(0)}</Typography>
            <Button variant="contained" color="secondary" onClick = {() => OnBigMoneygen()}>Buy BIG Money Generators</Button>
        </div>
=======

const Home = () => {
    // storing money
    const [money, setMoney] = useState<number>(Number);
    const OnClickMoney = () => {
        setMoney(money + 1)
    }
    return (
        <body>
            <h1>Current Money: {money}</h1>
            <button onClick = {() => OnClickMoney()}>Click for Money</button>
        </body>
>>>>>>> af1a8920e62b0796d4cff8dd0af900432cc794d8
    )
}

export default Home;