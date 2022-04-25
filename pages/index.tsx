import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';

const Home : NextPage = () => {

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography 
        variant="h1"
        style={{
          color: '#ffffff',
          fontSize: '4rem',
          fontWeight: 'bold',
        }}
      >
        unlocking the talent of the top high school students
      </Typography>
      <Typography 
        variant="h3"
        style={{
          color: '#D4D4D4',
          textAlign: 'center',
          width: '45%',
          fontSize: '1.5rem',
          marginTop: '1.3rem'
        }}
      >
        we match students with companies to fill real world positions that advance their careers
      </Typography>
    </Box>
  );
};

export default Home
