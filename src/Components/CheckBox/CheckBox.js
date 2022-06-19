import { Checkbox, TextField, Typography } from '@mui/material'
import React from 'react'
import './CheckBox.scss'

const CheckBox = ({lable,lableBold}) => {
  return (
    <div className='flex align-item-center'>
        <Checkbox type='checkbox' />
        <div className='pl-10'>
        <Typography variant='h6' className={lableBold&&'lable_class'}>{lable}</Typography>

        </div>
    </div>
  )
}

export default CheckBox