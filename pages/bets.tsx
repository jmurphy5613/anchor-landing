import axios from 'axios';

import { useEffect } from 'react';

import { Box } from '@mui/material';


const BASE_URL = "https://finnhub.io/api/v1/crypto/candle?";
const API_KEY = "ca7sruqad3id34o74u3g";


const Bets = () => {

    //https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=1572651390&to=1575243390&token=ca7sruqad3id34o74u3g
    const getBitcoinPriceHistory = async () => {
        axios.get(`https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=60&from=1572651380&to=1575243390&token=${API_KEY}`
        ).then(res => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        getBitcoinPriceHistory();
    }, [])

    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#171717'
        }}>

        </Box>
    )
}

export default Bets;