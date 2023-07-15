import { Stack, Typography } from '@mui/material'
import React from 'react'

export const Home = () => {
  return (
    <Stack>
        <Typography variant='h3' color='#ffa41c' margin='20vh' fontSize='60px' textAlign='center'>Welcome to Ambula</Typography>
        <Typography variant='p' textAlign='center' fontSize='20px' mb='30px'>
            This is a Todo App software application designed to assist users in creating, tracking, and prioritizing their tasks. It helps individuals and teams stay organized, increase productivity, and ensure that important tasks are not forgotten or overlooked. In addition to these a user also update their task and delete their task when necessary.
        </Typography>
        <Typography variant='p' textAlign='center' fontSize='20px'>
            A Shopping Cart is a fundamental feature of online shopping platforms that enables users to collect and manage products they wish to purchase. It serves as a digital basket where users can add, modify, and review their selected items before proceeding to the payment process. The shopping cart provides a convenient and streamlined way for customers to navigate through the online store and complete their transactions.
        </Typography>
    </Stack>
  )
}
