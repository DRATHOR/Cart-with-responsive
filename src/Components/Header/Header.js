import { Typography } from '@mui/material';
import React, { Children } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Header.scss';

const Header = ({children,className}) => {
  return (
    <div className={className}>
    {/* <div className='back_button_and_title'>
    <ArrowBackIcon/>
      <Typography variant='h5' style={{paddingLeft:'1rem' ,fontSize:'16px'}}>
      Create a new order
      </Typography>
    </div>
      <div>
        <MoreVertIcon/>
      </div> */}
      {children}
    </div>
  )
}

export default Header