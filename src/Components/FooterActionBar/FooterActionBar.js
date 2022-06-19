import { Button } from '@mui/material';
import React from 'react'
import './FooterActionBar.scss'

const FooterActionBar = ({buttonList}) => {
  return (
    <div className="Container footer_container">
        {/* <p>hi</p> */}
        {/* <Typography variant='body1'>{title}</Typography> */}
        <div className='flex align-item-right Container pt-10 pb-10  ' >
          {buttonList?.map(item=>{
            return <Button variant='contained' sx={{background:'#66332B',marginRight:'16px'}} onClick={item.onclick}>{item.name}</Button>
          })}
       
       </div>
    </div>
  )
}

export default FooterActionBar;