'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { Typography,Button } from '@mui/material';
import { decrement, increment, reset, resetAmount } from "../../redux2/counter";
import { useAppDispatch, useAppSelector } from "../../redux2/hooks";
import { Providers } from "../../redux2/provider";
import { incrementRank,resetMoneyGen,resetEverything } from "../../redux2/countergen"

const RankHome = () => {
      const dispatch = useAppDispatch();
      const money = useAppSelector((state) => state.counterReducer.value)
      const rank = useAppSelector((state) => state.countergenReducer.rank)
      const rankPoint = useAppSelector((state) => state.countergenReducer.rank_points)
      const moneygen = useAppSelector((state) => state.countergenReducer.moneygen)
      const increaseRank = () => {
        if (money >= 0){
          dispatch(incrementRank());
          dispatch(resetAmount())
          dispatch(resetMoneyGen())
        }
      };
      const OnTestingReset = () => {
        dispatch(resetEverything())
        dispatch(resetAmount())
      }
    return(
        <div>
            <Button variant="contained" color="secondary" onClick = {() => increaseRank()}>Click to upgrade Rank</Button>
            <Button variant="contained" color="secondary" onClick = {() => OnTestingReset()}>Reset for testing</Button>
            <Typography>Rank: {rank.toFixed (0)}</Typography>
            <Typography>Rank Points: {rankPoint.toFixed(0)}</Typography>
        </div>
    )
}

export default RankHome;