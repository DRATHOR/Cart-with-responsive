import React from 'react'
import DerivedDropdown from '../Components/DerivedDropdown/DerivedDropdown'

const DynamicForm = (props) => {
    console.log({props})
const form=(formData)=>{
  return <DerivedDropdown data={formData.item.data}/>
}

   

  return (
    <>
    {form(props)}
    </>
  )
}

export default DynamicForm