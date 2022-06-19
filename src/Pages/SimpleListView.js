import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addIcon } from '../Assets/Icons'
import ListCard from '../Components/ListCard/ListCard'
import './SimpleListView.scss'


const SimpleListView = ({ list }) => {
  const navigate=useNavigate();
  return (
    <div className='p-16'>
      {list?.map(listItem => {
        return (
          <ListCard listItem={listItem} />
        )
      })}
      <div className='floating_add_button' >
        <img src={addIcon} alt="" onClick={() => navigate('/order')} />
      </div>
    </div>
  )
}

export default SimpleListView