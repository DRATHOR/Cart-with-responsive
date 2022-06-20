import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header';
import NavBar from '../Components/NavBar/NavBar';
import Tab from '../Components/Tab/Tab';
import SimpleTable from '../Components/Table/SimpleTable'
import HideAndDisplay from '../Hooks/HideAndDisplay';
import { allOrderList } from '../Jsons/allTypeOfOrder';
import OrderTypeList from './OrderTypeList';
import SimpleListView from './SimpleListView';
import { useDispatch } from 'react-redux';
import { updateState } from '../Redux/common/action';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tableData, setTableData] = useState(allOrderList[0]);
  const { screenSize,
    setDimension,
    setHeaderFlag } = HideAndDisplay();
  const headerTab = [
    {
      id: 0,
      name: 'CARTs',
    },
    {
      id: 1,
      name: 'FAVORITEs',
    }
  ]
  const tablesTab = [
    {
      id: 0,
      name: 'Active Carts',
    },
    {
      id: 1,
      name: 'Archived Carts',
    }
  ]
  const dispatch = useDispatch();

  useEffect(() => {

    if (screenSize.dynamicWidth <= 800) {
      dispatch(updateState({ flag: false, component: '' }))
    }
    else {
      dispatch(updateState({ flag: true, component: 'home', paging: '', cartRef: '' }))
    }
    window.addEventListener('resize', setDimension);

    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  useEffect(() => {
    // setTableData([]);
    setTableData(allOrderList[selectedTab])
  }, [selectedTab]);

  return (
    <div>
      {screenSize.dynamicWidth > 800 &&
        <div className=''>
          <Header className='header_container'>
            <div className='flex justify-content-center align-item-center width-100'>

              <Tab tabs={headerTab} classes='header_tab' activeTab='active_header_tab' />
            </div>
          </Header>
          <div className='p-16'>
            <Tab tabs={tablesTab} setSelectedTab={setSelectedTab} setTableData={setTableData} classes='tabale_header_tab' activeTab='active' />
            <SimpleTable list={tableData} />
          </div>

        </div>
      }
      {screenSize.dynamicWidth <= 800 && <SimpleListView list={tableData} />}
    </div>
  )
}

export default Home