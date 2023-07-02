'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { Typography,Button } from '@mui/material';

const RankHome = () => {
    const [money, setMoney] = useState<number>(() => {
        const storedMoney = window.localStorage.getItem('money');
        return storedMoney ? parseFloat(storedMoney) : 0;
      });
      const [moneygen, setMoneygen] = useState<number>(() => {
        const storedMoneygen = window.localStorage.getItem('moneygen');
        return storedMoneygen ? parseFloat(storedMoneygen) : 0;
      });
      const [rank, setRank] = useState<number>(() => {
        const storedRank = window.localStorage.getItem('rank');
        return storedRank ? parseFloat(storedRank) : 1;
      });
      const [rankPoint, setRankPoint] = useState<number>(() => {
        const storedRankPoint = window.localStorage.getItem('rankPoint');
        return storedRankPoint ? parseFloat(storedRankPoint) : 0;
      });
    
      const [bigMoneygen, setBigMoneygen] = useState<number>(() => {
        const storedBigMoneygen = window.localStorage.getItem('bigMoneygen');
        return storedBigMoneygen ? parseFloat(storedBigMoneygen) : 0;
      });
    
      const [timesmoney, setTimesMoney] = useState<number>(() => {
        const storedTimesMoney = window.localStorage.getItem('timesmoney');
        return storedTimesMoney ? parseFloat(storedTimesMoney) : 0;
      });

      const OnClickMoney = () => {
        setMoney(prevMoney => prevMoney + timesmoney);
      };
    
      const OnReset = () => {
        if (money >= 10 * rank * 1.5) {
          setMoneygen(0);
          setMoney(0);
          setRank(prevRank => prevRank + 1);
          setTimesMoney(prevTimesMoney => prevTimesMoney * 2);
          setRankPoint(prevRankPoint => prevRankPoint + 1);
        }
      };
    
      const OnTestingReset = () => {
        setMoneygen(0);
        setMoney(0);
        setRank(1);
        setTimesMoney(1);
        setBigMoneygen(0);
        setRankPoint(0);
      };

    useEffect(() => {
        window.localStorage.setItem('money', JSON.stringify(money));
        window.localStorage.setItem('moneygen', JSON.stringify(moneygen));
        window.localStorage.setItem('rank', JSON.stringify(rank));
        window.localStorage.setItem('timesmoney', JSON.stringify(timesmoney))
        window.localStorage.setItem('bigmoneygen', JSON.stringify(bigMoneygen))
        window.localStorage.setItem('rankpoint', JSON.stringify(rankPoint))
    }, [money,moneygen,rank,timesmoney, bigMoneygen, rankPoint]);
    useEffect(() => {
        if(moneygen >= 1){
            const timer = setInterval(() => {
                setMoney(prevMoney => prevMoney + moneygen / 10 *timesmoney)
            },1000)
            return () => {
                clearInterval(timer)
            }
    }},[moneygen])
    return(
        <div>
            <Button variant="contained" color="secondary" onClick = {() => OnReset()}>Click to upgrade Rank</Button>
            <Button variant="contained" color="secondary" onClick = {() => OnTestingReset()}>Reset for testing</Button>
            <Typography>Rank: {rank.toFixed (0)}</Typography>
            <Typography>Rank Points: {rankPoint.toFixed(0)}</Typography>
        </div>
    )
}

export default RankHome;