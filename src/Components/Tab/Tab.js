import { Typography } from '@mui/material'
import React, { useState } from 'react'
import './Tab.scss'

const Tab = ({tabs,setSelectedTab,setTableData,classes,activeTab}) => {
    const [active,setActive]=useState(0);
    const tabSelected=(index)=>{
        
            setActive(index);
            setSelectedTab(index);
            setTableData([]);
            
        
    }
  return (
    <div className="tab_container">
        {tabs?.map((item,index)=>{
            return (
                <div className={index===active?`${classes} ${activeTab}`:`${classes}`} onClick={()=>tabSelected(index)}>
                    <Typography variant='h5' sx={index===active&&{fontWeight:600}} >
                        {item.name}
                    </Typography>
                    </div>
            )
        })}
    </div>
  )
}

export default Tab