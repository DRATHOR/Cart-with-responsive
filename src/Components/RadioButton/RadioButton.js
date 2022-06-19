import { Radio, Typography } from '@mui/material';
import React from 'react'

const RadioButton = ({item}) => {
  return (
    <div className='flex align-item-center'>
        <Radio type='radio' />
        <Typography variant='h6'><span className='pl-10'>{item.name}</span></Typography>
    </div>
  )
}

export default RadioButton;