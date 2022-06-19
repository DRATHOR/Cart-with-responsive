import React from 'react'
import { useNavigate } from 'react-router-dom'
import DerivedDropdown from '../Components/DerivedDropdown/DerivedDropdown'
import FooterActionBar from '../Components/FooterActionBar/FooterActionBar'
import { newDoor } from '../Jsons/ConfigureNewDoor'
import './ConfigNewStore.scss'

const ConfigNewStore = () => {
  const navigate=useNavigate();
  const footerButtons=[
    {
      name:'CONFIGURE',
      onclick:()=>navigate('/create-new-store')
    }
  ]
  return (
    <>
      <div className="Container config_new_store_container vh mt-8">
        <DerivedDropdown data={newDoor} />
      </div>
      <FooterActionBar buttonList={footerButtons}/>
    </>
  )
}

export default ConfigNewStore