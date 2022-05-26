import { Button } from '@mui/material';


const ButtonNavigation = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            marginTop: '2rem'
        }}>
            <Button variant="contained" sx={{
                backgroundColor: 'rgb(0, 174, 153)',
                fontFamily: 'Montserrat',
                padding: '0.75rem',
                marginRight: '1rem  '
            }}>Connect Wallet</Button>
            <Button variant="outlined" sx={{
                borderColor: 'rgb(0, 174, 153)',
                fontFamily: 'Montserrat',
                color: '#ffffff',
                '&:hover': {
                    borderColor: 'rgb(0, 174, 153)',
                }
            }}>View Open Bets</Button>
        </div>
    )
}

export default ButtonNavigation;