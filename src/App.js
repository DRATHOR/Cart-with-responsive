import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { allRoutes } from './Routing/Rounting';
import { useEffect, useState } from 'react';
import HideAndDisplay from './Hooks/HideAndDisplay';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useSelector,useDispatch} from 'react-redux'
import { updateState } from './Redux/common/action';

function App() {
  const {screenSize,setDimension,}=HideAndDisplay();
  const component=useSelector(state=>state.component);
  const message=useSelector(state=>state.message);
  const paging=useSelector(state=>state.paging);
  const cartRef=useSelector(state=>state.cartRef);


  const dispatch=useDispatch();
  useEffect(() => {
    if(screenSize.dynamicWidth >800){
      dispatch(updateState({flag:false,component:'home',paging:'',cartRef:''}))
    }
    else{
      dispatch(updateState({flag:true,component:''}))
    }
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
  <>
    
  {screenSize.dynamicWidth >800&&<NavBar/>}
  {screenSize.dynamicWidth >800&&component!=='home'&&<Header className='header_container'>
       <div className='flex justify-content-space-between align-item-center width-100'>
        <div className='flex justify-content-space-between align-item-center' >
        <ArrowBackIcon/>
        {message&&<Typography variant='h5' style={{paddingLeft:'1rem' ,fontSize:'16px'}}>
      {message}
      </Typography>}
     { paging&&<Typography variant='subtitle1'><span className="pl-10">{paging}</span></Typography>}
      {cartRef&&<Typography variant='subtitle1'><span className="pl-10">cart:#{cartRef}</span></Typography>}
        </div>
    
    </div>
      <div>
        <MoreVertIcon/>
      </div></Header>}
     {screenSize.dynamicWidth <=800&&component!=='home'&& <Header className="tab_and_mobile">
       <div className='flex justify-content-space-between align-item-center width-100'>
        <div className='flex justify-content-space-between align-item-center' >
        <ArrowBackIcon/>
      {message&&<Typography variant='h5' style={{paddingLeft:'1rem' ,fontSize:'16px'}}>
      {message}
      </Typography>}
     { paging&&<Typography variant='subtitle1'><span className="pl-10">{paging}</span></Typography>}
      {cartRef&&<Typography variant='subtitle1'><span className="pl-10">Cart:{cartRef}</span></Typography>}
        </div>
    
    </div>
      <div>
        <MoreVertIcon/>
      </div></Header>}
      <div className='App'>
        <BrowserRouter>
          <Routes>
            {
              allRoutes.map((item) => {
                return <Route path={item.path} element={item.element} />
              })
            }
          </Routes>
        </BrowserRouter>

      </div>

    </>
  );
}

export default App;
