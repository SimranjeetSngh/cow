import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../Assets/cowLogo.png';
 import './styles.css';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    handleMenuClose(); // Close the menu when navigating
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor:'#1e4356' ,
        boxShadow: 'none',
        transition: 'background-color 0.3s',
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: 'black', cursor: 'pointer' }} onClick={scrollToTop}>
          <img src={Logo} alt="COW" style={{ height: '40px', width:"120px" }} />
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <IconButton style={{
          color:  'white',
        }} edge="end" color="inherit" onClick={handleMenuOpen}  className="hamburger">
          <MenuIcon />
        </IconButton>

        {/* Regular Menu Items */}
        <div className="menu-items">
          <Button component={Link} to="about" smooth={true} style={{  color: 'white', fontWeight:'bolder', fontSize:'13px' }}>
            About
          </Button>
          <hr style={{ border: '1px solid rgba(28,177,105,0.8)', height:'20px'}}/>
          <Button component={Link} to="work" smooth={true} style={{  color:  'white', fontWeight:'bolder', fontSize:'13px'}}>
            Work
          </Button>
          <hr style={{ border: '1px solid rgba(28,177,105,0.8)', height:'20px'}}/>
          <Button component={Link} to="contact" smooth={true} style={{  color:  'white', fontWeight:'bolder', fontSize:'13px'}}>
            Contact Us
          </Button>
          <hr style={{ border: '1px solid rgba(28,177,105,0.8)', height:'20px'}}/>
          <Button component={Link} to="contact" smooth={true} style={{  color:  'white', fontWeight:'bolder', fontSize:'13px'}}>
            Privacy Policy
          </Button>
        </div>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMenuClose}
        style={{ marginTop: '45px', }} // Adjust based on your AppBar height
      >
        <MenuItem onClick={scrollToTop}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="about" smooth={true} onClick={handleMenuClose}>About</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="work" smooth={true} onClick={handleMenuClose}>Work</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="contact" smooth={true} onClick={handleMenuClose}>Contact Us</Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;