import { Avatar, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import bell from '../../Assets/Icons/bell.svg'
// import Menu from '../../Assets/Icons/FAQ';
import {Menu,FAQ,Notification, Profile} from '../../Assets/Icons/index'
// import FAQ from '../../Assets/Icons/FAQ'
// import Menu from '../../Assets/Icons/Menu'
// import Notification from '../../Assets/Icons/Notification'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="NavBar-Container">
        <div className='logo_and_title_container'>
        <Avatar sx={{ bgcolor: '#ED357E '}}>f1</Avatar>
        <Typography variant='h2' style={{paddingLeft:'1rem',}}>stdioz</Typography>
        </div>
        <div className="notification-container">
        <div>
            <img src={Menu} alt=""/>
          </div>
          <div>
            <img src={Notification} alt=""/>
          </div>
          <div>
            <img src={FAQ} alt=""/>
          </div>
          <div>
          <Avatar alt="Remy Sharp" src={Profile} />
          </div>
        
          {/* <img src={Menu} alt=''/> */}
            {/* <Menu/>
            <FAQ/>
            <Notification/>
            <Avatar/> */}
        </div>

    </div>
  )
}

export default NavBar