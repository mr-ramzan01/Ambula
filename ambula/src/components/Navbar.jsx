import React from 'react'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'

export const Navbar = () => {
    const style = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '20px'
    }
  return (
    <Stack bgcolor='#000' p='20px 0' direction='row' justifyContent='space-around'>
        <NavLink style={style}to='/'>Home</NavLink>
        <NavLink style={style} to='/about'>About</NavLink>
        <NavLink style={style} to='/todo'>Todo</NavLink>
        <NavLink style={style} to='/cart'>Cart</NavLink>
        <NavLink style={style} to='/contactus'>Contact us</NavLink>
    </Stack>
  )
}
