import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Cart = () => {
    const {cart, setCart} = useContext(AppContext);
  return (
    <Box></Box>
  )
}
