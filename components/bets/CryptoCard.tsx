import { Box, Typography } from '@mui/material';

import CoinChart from './CoinChart';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { SettingsInputSvideoSharp } from '@mui/icons-material';

interface cryptoCardProps {
    ticker: string,
    from: number,
    to: number
}

const BASE_URL = "https://finnhub.io/api/v1/crypto/candle?";
const API_KEY = "ca7sruqad3id34o74u3g";

const CryptoCard:React.FC<cryptoCardProps> = () => {

    const [currentPrice, setCurrentPrice] = useState();

    const [isGreen, setIsGreen] = useState(true);

    useEffect(() => {
        axios.get('https://api.pro.coinbase.com/products/BTC-USD/ticker').then(res => {
            setCurrentPrice(res.data.price)
        });
    }, [])

    setInterval(() => {
        axios.get('https://api.pro.coinbase.com/products/BTC-USD/ticker').then(res => {
            if(res.data.price > currentPrice && isGreen) return;
            else if (res.data.price > currentPrice) setIsGreen(true);
            else setIsGreen(false);
            setCurrentPrice(res.data.price)
        });
    }, 10000)


    return (
        <Box sx={{
            width: '40%',
            height: '40%',
            border: '1px solid #3750A8',
        }}>
            {isGreen ? 
            <Typography variant="h3" sx={{color: '#00e676'}}>
                {currentPrice}
            </Typography> 
            :
            <Typography variant="h3" sx={{color: '#ff1744'}}>
                {currentPrice}
            </Typography> 
            }

            <CoinChart />
        </Box>
    )
}

export default CryptoCard;