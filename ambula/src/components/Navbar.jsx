import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'

export const Navbar = () => {
  return (
    <Box>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contactus'>Contact us</NavLink>
    </Box>
  )
}
