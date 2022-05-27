import axios from 'axios';

import { useEffect } from 'react';

import { Box } from '@mui/material';

import CryptoCard from '../components/bets/CryptoCard';


const Bets = () => {



    //https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=1572651390&to=1575243390&token=ca7sruqad3id34o74u3g
    const getBitcoinPriceHistory = async () => {
        // axios.get(`https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=M&from=1582651380&to=1595243390&token=${API_KEY}`
        // ).then(res => {
        //     console.log(res.data)
        // })
    }

    useEffect(() => {
    }, [])

    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#171717',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CryptoCard />
        </Box>
    )
}

export default Bets;