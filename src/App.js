import logo from './logo.svg';
import './App.css';
import CardForDisplayDetails from './Components/Card/CardForDisplayDetails';
import OrderTypeList from './Pages/OrderTypeList';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import AllRequiredDetails from './Pages/AllRequiredDetails';
import ConfigNewStore from './Pages/ConfigNewStore';
import CreateNewStore from './Pages/CreateNewStore';
import FooterActionBar from './Components/FooterActionBar/FooterActionBar';
import { Cart } from './Pages/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { allRoutes } from './Routing/Rounting';
// import HeaderBar from './Components/HeaderBar/HeaderBar';

function App() {
  return (



    <>
      <NavBar />
      <Header />
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
