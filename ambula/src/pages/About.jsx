import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <Stack mt='25vh' direction='row' justifyContent='space-between'>
        <Box width='50vw' display='flex' justifyContent='center' alignItems='center'>
            <Typography color='#ffa41c' fontSize='50px'>About</Typography>
        </Box>
        <Box width='50vw'>
        <Typography variant='p' fontSize='20px'>
            Ambula is an App based on UHI(Unified Health Interface) popularly known as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime Minister which connects patients live with the unified health network across India for all healthcare needs. Ambula is committed to bridge all the communication gaps prevalent in healthcare delivery and Ambula will impart it's contribution to this Noble Vision.
            We are always available there for you if you find any discomfort of health. Your trust empowers us to serve you more.
        </Typography>
        </Box>
    </Stack>
  )
}
