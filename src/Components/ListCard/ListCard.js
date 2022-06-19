import { ListItem, Typography } from '@mui/material'
import React from 'react'
import './ListCard.scss'

const ListCard = ({listItem}) => {
   
  return (
    <div className='list_card_container mb-8 p-16'>
        <div className='list_card_header pb-10'>
            <Typography variant='h6'>Group Name:{'#'}{listItem?.groupName}</Typography>
            <Typography variant='h6'>{listItem?.refNo}</Typography>
        </div>
        <div className='list_card_title pb-10'>
            <Typography variant='h4'>{listItem?.title}</Typography>
        </div>
        <div className='list_card_footer '>
            <div className='flex align-item-center'>
            {listItem.expires<7?<Typography variant='h4'><span style={{color:'orange'}}>Expires In {listItem?.expires} days</span></Typography>:<Typography variant='h4'>Expires In {listItem?.expires} days</Typography>}
            <span>&#8226;</span>
            <Typography variant='h4'>{listItem?.createdBy}</Typography>
            </div>
            {listItem?.status&&<div className='list_card_status'>
                <Typography variant='h5'>{listItem?.status}</Typography>
            </div>}
            
        </div>
        
    </div>
  )
}

export default ListCard