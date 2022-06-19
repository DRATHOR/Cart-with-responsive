import React from 'react'
import ListCard from '../Components/ListCard/ListCard'
import { allOrderList } from '../Jsons/allTypeOfOrder'

const SimpleListView = ({list}) => {
  return (
    <div className='p-16'>
        {list?.map(listItem=>{
            return(
                <ListCard listItem={listItem}/>
            )
        })}
    </div>
  )
}

export default SimpleListView