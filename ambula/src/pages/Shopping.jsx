import { Box, Button, Snackbar, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';

export const Shopping = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const { cart, setCart } = useContext(AppContext);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(el => el.json())
        .then(el => {
            setData(el.products);
        })
        .catch(err => {
            setError(true);
            console.log(err, 'err');
        })
        .finally(() => {
            setLoading(false);
            setError(false);
        })
    },[]);

    const handleAddToCart = (el) => {
        setCart([...cart, el]);
        handleClick();
    }

    if(err) {
        <Box>Error</Box>
    }

    return (
        <>
           {
              loading ? <Box>Loading...</Box>
              : <Box display='grid' gap='20px' p='30px' mt='40px' gridTemplateColumns='repeat(4, 1fr)'>
              {
                  data.map(el => (
                      <Box key={el.id} sx={{padding: '30px 10px', borderRadius: '10px'}} style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                          <Typography textAlign='center' pb='20px' fontSize='22px'>{el.title}</Typography>
                          <img style={{width: '100%', height: '60%'}} src={el.images[0]}/>
                          <Typography textAlign='center' p='20px 0' fontSize='20px'>₹ {el.price}</Typography>
                          <Button variant='outlined' sx={{display: 'flex', margin:'auto'}} onClick={() => handleAddToCart(el)}>Add to Cart</Button>
                      </Box>
                  ))
              }
                </Box>
           }
           <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Added to Cart"
            />
        </>
    )
}
