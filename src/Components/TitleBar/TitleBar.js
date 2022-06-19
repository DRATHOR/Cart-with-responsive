import { Typography } from '@mui/material'
import React from 'react';
import './TitleBar.scss'

const TitleBar = ({title}) => {
  
  return (
    <div className="title_container">
        <Typography variant='h5'><strong>{title}</strong></Typography>
    </div>
  )
}

export default TitleBar