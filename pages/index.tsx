import { Box } from '@mui/material';
import { NextPage } from 'next';

import TitleDescription from '../components/homepage/TitleDescriptio';

const Home : NextPage = () => {

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
      }}
    >
      <Box
        sx={{
          maxWidth: '60%',
          minWidth: '300px',
          margin: '0 0 0 2rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '0 2rem',
          fontSize: '4rem',
          color: '#eee',
          height: '100vh',
          zIndex: '1'
        }}
      >
        <TitleDescription />
      </Box>
    </Box>
  );
};

export default Home
