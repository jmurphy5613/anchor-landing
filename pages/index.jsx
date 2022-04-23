import { Box, Typography } from '@mui/material';

const Home = () => {

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Typography variant="h1"
        style={{
          // background: "-webkit-linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
          // WebkitBackgroundClip: "text",
          // WebkitTextFillColor: "transparent",
          // backgroundColor: '#D9AFD9',
          // fontWeight: '600'
          color: '#ffffff',
        }}
      >
        Home
      </Typography>
    </Box>
  )
}

export default Home
