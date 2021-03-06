import { Button } from '@mui/material';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setConnectWallet } from '../../redux/features/user';

import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { ArrowBackIosTwoTone } from '@mui/icons-material';

declare var window:any;

const ButtonNavigation = () => {

    const router = useRouter();

    const dispatch = useDispatch();
    const user = useSelector((state:any) => state.user.value);

    useEffect(() => {
        console.log(user);
    }, [])

    const checkIfUserIsOwner = async (user:string) => {
        const owner = '0x29C6eDA93eC48C6385e392b4B5D5C92f1B92baDF';
        if(user.toLowerCase() === owner.toLowerCase()) {
            return true;
        }
        return false;
    }

    const connectWallet = async () => {
        const ethereumConnection = window.ethereum;

        if(ethereumConnection) {
            await ethereumConnection.request({ method: 'eth_requestAccounts' }).then( async (accounts:any) => {

                dispatch(setConnectWallet({ 
                  wallet: accounts[0],
                  isOwner: await checkIfUserIsOwner(accounts[0])
                }));
            });
        }
    }

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            marginTop: '2rem'
        }}>
            {user.isOwner === false ? 
                <Button variant="contained" onClick={connectWallet} sx={{
                    backgroundColor: 'rgb(0, 174, 153)',
                    fontFamily: 'Montserrat',
                    padding: '0.75rem',
                    marginRight: '1rem  '
                }}>Connect Wallet</Button>
                :
                <Button variant="contained" onClick={e => router.push('/bets')} sx={{
                    backgroundColor: 'rgb(0, 174, 153)',
                    fontFamily: 'Montserrat',
                    padding: '0.75rem',
                    marginRight: '1rem',
                    '&:hover': {
                        backgroundColor: 'rgb(0, 174, 153)',
                    }
                }}>View Bet Results</Button>
            }
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