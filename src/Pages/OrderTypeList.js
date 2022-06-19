import React from 'react'
import { useNavigate } from 'react-router-dom';
import CardForDisplayDetails from '../Components/Card/CardForDisplayDetails';
import {data} from '../Jsons/OrderList'
import './OrderTypeList.scss'

const OrderTypeList = () => {
  const navigate=useNavigate();
  return (
    <div className='Order_type_list_container'>
      {data.map((item,index)=>{
        return <CardForDisplayDetails title={item.title} description={item.description} onclick={()=>navigate('/config')}/>
      })}
        
       
    </div>
  )
}

export default OrderTypeList