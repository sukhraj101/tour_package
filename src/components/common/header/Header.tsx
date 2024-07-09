import { Box, Button, IconButton } from '@mui/material';
import logo from '@assets/img/header/logo.png';
import { NavLink } from 'react-router-dom';
import info from '@assets/icons/info.png';
import language from '@assets/icons/language.png';
import './header.css'



const Header = () => {
  return (
    <>
      <div className="header_wrpr">
        <Box className="header_inner_wrpr" sx={{display:'flex',justifyContent:'space-between',alignItems:'center',columnGap:'20px'}}>
          <Box className="header_logo">
            <div className="header_logo_img">
              <img src={logo} alt='logo'/>
            </div>
          </Box>
          <Box className="header_menu_wrpr" flex={'0 1 506px'}>
            <Box component={'ul'} sx={{display:'flex',columnGap:"3%",alignItems:'center'}} className="header_menu_list">
              <Box component={'li'} className="header_menu_item">
                <NavLink className='header_menu_links' to={'/'}>Home</NavLink>
              </Box>
              <Box component={'li'} className="header_menu_item">
                <NavLink className='header_menu_links' to={'/menu'}>Menu</NavLink>
              </Box>
              <Box component={'li'} className="header_menu_item">
                <NavLink className='header_menu_links' to={'/activities'}>Activities</NavLink>
              </Box>
              <Box component={'li'} className="header_menu_item">
                <NavLink className='header_menu_links' to={'/cities'}>Cities</NavLink>
              </Box>
               <Box component={'li'} className="header_menu_item">
                <NavLink className='header_menu_links' to={'/social-media'}>Social Media</NavLink>
              </Box>
            </Box>
          </Box>
          <Box className="header_cta" sx={{display: 'flex',alignItems: 'center',columnGap: '10%',justifyContent:'end',flex:"0 0 250px"}}>
            <IconButton ><img src={info} alt="info" /></IconButton>
            <IconButton ><img src={language} alt="change language" /></IconButton>
            <Button className='header_login_btn'>Login</Button>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Header