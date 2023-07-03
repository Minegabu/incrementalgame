'use client'
import { useEffect } from 'react';
import { Typography,Button } from '@mui/material';
import { incrementByAmount,decrementByAmount } from "../redux2/counter";
import { incrementBigMoneygen, incrementMoneygen, decrementRankPoints,incrementMoneygenbyamount,increaseMPS,increaseMPSbyamount } from '../redux2/countergen';
import { useAppDispatch, useAppSelector } from "../redux2/hooks";

const Home = () => {

    // When adding a new rank reset/feature
    // first add the set consts
    // then add the function for the button
    // then get/add it to the local storage
    // create the button

    // storing money
    const money = useAppSelector((state) => state.counterReducer.value);
    const moneygen = useAppSelector((state) => state.countergenReducer.moneygen)
    const rank_points = useAppSelector((state) => state.countergenReducer.rank_points)
    const bigMoneygen = useAppSelector((state) => state.countergenReducer.bigmoneygen)
    const timesmoney = useAppSelector((state) => state.countergenReducer.multiplier)
    const dispatch = useAppDispatch();
    const increaseMoneygen = () => {
        if (money >= 10){
            dispatch(incrementMoneygen());
            dispatch(decrementByAmount(10))
            dispatch(increaseMPS())
        }
      };
    
      const increaseBigMoneygen = () => {
        if (rank_points >= 10){
            dispatch(incrementBigMoneygen());
            dispatch(decrementRankPoints(10))
        }
      };

      
    useEffect(() => {
    if (bigMoneygen >= 1){
        const timer2 = setInterval(() => {
            dispatch(incrementMoneygenbyamount(bigMoneygen))
            dispatch(increaseMPSbyamount(bigMoneygen));
        }, 1000);
        return () => {
            clearInterval(timer2);
        };
    } 
  }, [bigMoneygen]);


  useEffect(() => {
    if (moneygen >= 1) {
      const timer = setInterval(() => {
        dispatch(incrementByAmount(moneygen / 10 * timesmoney));
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [moneygen]);


    return (
        <div>
            <Typography>Money Generators: {moneygen.toFixed(0)} </Typography> 
            <Button variant="contained" color="secondary" onClick = {() => increaseMoneygen()}>Buy Money Generators</Button>
            <Typography>Big Money Generators: {bigMoneygen.toFixed(0)}</Typography>
            <Button variant="contained" color="secondary" onClick = {() => increaseBigMoneygen()}>Buy BIG Money Generators</Button>
        </div>
    )
}

export default Home;