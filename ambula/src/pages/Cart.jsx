import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

export const Cart = () => {
    const {cart, setCart} = useContext(AppContext);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        setSubTotal(0);
        for(let i=0; i<cart.length; i++) {
            setSubTotal((pr) => pr + cart[i].price);
        }
    },[cart])

    const handleRemoveCart = (elem) => {
        const data = cart.filter(el => el.id !== elem.id);
        setCart(data);
    }

    console.log(cart, 'cart')
  return (
    <Box>
        <Box display='flex' p='20px' borderBottom='1px solid gray'>
            <Box marginRight='30px'>No. of Items: {cart.length}</Box>
            <Box>Subtotal: ₹ {subTotal}</Box>
        </Box>
           { 
               cart.length == 0 ? <Box>No items in the Cart</Box>
              : <Box display='grid' gap='20px' p='30px' mt='40px' gridTemplateColumns='repeat(4, 1fr)'>
              {
                  cart.map(el => (
                      <Box key={el.id} sx={{padding: '30px 10px', borderRadius: '10px'}} style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                          <Typography textAlign='center' pb='20px' fontSize='22px'>{el.title}</Typography>
                          <img style={{width: '100%', height: '60%'}} src={el.images[0]}/>
                          <Typography textAlign='center' p='20px 0' fontSize='20px'>₹ {el.price}</Typography>
                          <Button variant='outlined' sx={{color: '#fff', backgroundColor: 'red', ":hover": {background: 'red'}, display: 'flex', margin:'auto', }} onClick={() => handleRemoveCart(el)}>Remove from Cart</Button>
                      </Box>
                  ))
              }
                </Box>
           }
    </Box>
  )
}
