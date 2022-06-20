import React from 'react'
import { useNavigate } from 'react-router-dom';
import CardForDisplayDetails from '../Components/Card/CardForDisplayDetails';
import Header from '../Components/Header/Header';
import { data } from '../Jsons/OrderList'
import { useDispatch } from 'react-redux';

import './OrderTypeList.scss'
import { updateState } from '../Redux/common/action';

const OrderTypeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(updateState({ flag: true, component: 'order', message: 'Create a new order', paging: '', cartRef: '' }))
  return (
    <>

      <div className='Order_type_list_container'>
        {data.map((item, index) => {
          return <CardForDisplayDetails title={item.title} description={item.description} onclick={() => navigate('/config')} />
        })}


      </div>
    </>

  )
}

export default OrderTypeList