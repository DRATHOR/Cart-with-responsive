import { RadioButtonChecked } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { FAQ } from '../../Assets/Icons'
import CheckBox from '../CheckBox/CheckBox'
import Dropdown from '../Dropdown/Dropdown'
import RadioButton from '../RadioButton/RadioButton'
import './DerivedDropdown.scss'

const DerivedDropdown = ({ data }) => {

  return (
    <div className='DerivedDropdown_container'>
      {data?.map((item) => {

        return <Box sx={{ flexGrow: 1 }}>

          <Grid container columns={{ xs: 5, sm: 8, md: 12 }}>
            <Grid item xs={0} sm={0} md={1}></Grid>
            <Grid item xs={5} sm={2} md={3}>

              <div className='lable_dropdown'>
                <span><Typography variant='h6'>{item.lable}</Typography> </span>{item?.faq && <span>
                  <img src={FAQ} alt="" style={{ width: '13px', paddingLeft: '10px' }} />
                </span>}
              </div>
            </Grid>
            <Grid item xs={5} sm={6} md={7} spacing={3}>

              {item?.type === 'multidropdown' &&
                <>
                  {
                    item.multiList.map(elements => {
                      return (
                        <>
                          <div className='multi_dropdown'>
                            <Grid item xs={1.26} sm={1.5} md={2}>
                              <Typography variant='h6'>{elements.lable}</Typography>
                            </Grid>
                            <Grid item xs={1.87} sm={3.25} md={5}>
                              <Dropdown item={elements.options[0]} />
                            </Grid>
                            <Grid item xs={1.87} sm={3.25} md={5}>
                              <Dropdown item={elements.options[1]} />
                            </Grid>
                          </div>
                        </>)
                    }

                    )
                  }
                </>}
              {item?.type === "radio" && <RadioButton item={item}/>}
              {item?.type === "datepicker" && <input type='date'/>}
              {item?.type === "dropdownWidthLable" && <Dropdown item={item} />}
              {item?.type === 'checkbox' && <CheckBox lable={item?.name} />}
              {item?.type === 'checkboxList' && item?.list?.map(checkboxItem => {
                return <Grid container columns={{ xs: 5, sm: 8, md: 12 }} className="align-item-center">
                  {(Array.isArray(checkboxItem)) && checkboxItem.map(elements => {
                    switch (elements.type) {
                      case 'checkbox': return <Grid item xs={5} sm={2} md={4}><div className="pb-10"><CheckBox lable={elements.name} /></div></Grid>
                      case 'dropdown': return <Grid item xs={5} sm={6} md={8}><Dropdown item={elements} /></Grid>
                      default: <></>
                    }
                  }
                  )

                  }
                  {!(Array.isArray(checkboxItem)) && <div className="pb-10"><CheckBox lable={checkboxItem.name} /></div>}
                  {/* / <CheckBox lable={item.lable}/> */}

                </Grid>
              })
              }
            </Grid>
            <Grid item xs={0} sm={0} md={1}></Grid>
          </Grid>

        </Box>
      })}
    </div>
  )
}

export default DerivedDropdown