import axios from 'axios';

import { useEffect } from 'react';

import { Box } from '@mui/material';

const Bets = () => {


    useEffect(() => {
        // axios.get('https://api.pro.coinbase.com/products/BTC-USD/ticker').then(res => {
        //     console.log(res.data.price);
        // });
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