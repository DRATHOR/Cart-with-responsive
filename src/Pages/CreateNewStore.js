import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardForDisplayDetails from '../Components/Card/CardForDisplayDetails'
import DerivedDropdown from '../Components/DerivedDropdown/DerivedDropdown'
import FooterActionBar from '../Components/FooterActionBar/FooterActionBar'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import TitleBar from '../Components/TitleBar/TitleBar'
import DynamicForm from '../Dyanamic/DynamicForm'
import { newDoor } from '../Jsons/ConfigureNewDoor'
import { createFormData } from '../Jsons/CreateFormData'
import './CreateNewStore.scss'

const CreateNewStore = () => {
  const navigate=useNavigate();
const footerButtons=[
  {
    name:'PREVIEW',
  },
{
  name:'ADD TO CART',
  onclick:()=>navigate('/cart'),
}
]
  return (
    <>

      <ProgressBar />
      {
        createFormData?.map((item,) => {

          return <div className='Container mb-16'>
            <TitleBar title={item.title} />
            <DynamicForm item={item} />
          </div>
          
        })
      }
      <div className='config_item'>
      <CardForDisplayDetails  showCheckbox title={'Special Configuration Request'} lableBold/>
      <CardForDisplayDetails title={'Torsion Spring Inquiry'} lableBold />
      <CardForDisplayDetails title={'Additional Information'} lableBold />
      </div>
    

      {/* <CardForDisplayDetails title={item?.title} description={item.description} />
      <CardForDisplayDetails title={item?.title} description={item.description} /> */}
      <FooterActionBar buttonList={footerButtons} />

    </>

  )
}

export default CreateNewStore