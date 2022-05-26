import Typography from '@mui/material/Typography';
import AnimatedTitle from './AnimatedTitle';

const TitleDescription = () => {
    return (
        <>
            <Typography 
                variant="h1"
                style={{
                    color: '#ffffff',
                    fontSize: '4rem',
                    fontFamily: 'Montserrat'
                }}
            >
                Create bets on the crypto price changes of <AnimatedTitle /> 
            </Typography>
            <Typography 
                variant="h3"
                style={{
                    color: '#D4D4D4',
                    fontSize: '1.5rem',
                    marginTop: '2rem',
                    fontFamily: 'Montserrat'
                }}
            >
                we allow you to bet against other users on the future prices of all the top crypto currencies
            </Typography>
        </>
    )
}

export default TitleDescription;