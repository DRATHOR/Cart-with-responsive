import { Box, Grid } from '@mui/material'
import React from 'react'
import { FAQ } from '../Assets/Icons'
import Dropdown from '../Components/Dropdown/Dropdown'
import { newDoor } from '../Jsons/ConfigureNewDoor'
import './AllRequiredDetails.scss'

const AllRequiredDetails = () => {
  return (
    <div className='allRequiredDetails_container'>
      {newDoor?.map((item) => {

        return <Box sx={{ flexGrow: 1 }}>
         
            <Grid container columns={{ xs: 5, sm: 8, md: 12 }}>
              <Grid item xs={0} sm={0} md={1}></Grid>
              <Grid item xs={2} sm={2} md={2}>

                <div className='lable_dropdown'>
                 <span> {item.lable}</span>{item?.faq && <span>
                    <img src={FAQ} alt="" style={{ width: '13px', paddingLeft: '10px' }} />
                  </span>}
                </div>
              </Grid>
              <Grid item xs={3} sm={6} md={8}>
                <Dropdown item={item} />
              </Grid>
              <Grid item xs={0} sm={0} md={1}></Grid>
            </Grid>
          
        </Box>
      })}
    </div>
  )
}

export default AllRequiredDetails