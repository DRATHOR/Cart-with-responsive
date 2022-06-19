import React,{useState,useEffect} from 'react'
import SimpleTable from '../Components/Table/SimpleTable'
import { allOrderList } from '../Jsons/allTypeOfOrder';
import OrderTypeList from './OrderTypeList';
import SimpleListView from './SimpleListView';

const Home = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
    //   window.addEventListener('resize', setDimension);
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])


  return (
    <div>
       {screenSize.dynamicWidth >800 && <div className='p-16'><SimpleTable list={allOrderList} /></div>}
       {screenSize.dynamicWidth <=800 && <SimpleListView list={allOrderList}/>}
    </div>
  )
}

export default Home