'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';

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
    )
}

export default Home;