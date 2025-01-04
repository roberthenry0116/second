import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AboutCard from './AboutCard';
import ContactMe from './ContactMe';

const pages = ['About Me', 'Project', 'Skills', 'Resume'];
const settings = ['Profile', 'Contact Me', 'Dashboard', 'Resume'];

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NapBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [contactMeKey, setContactMeKey] = React.useState(0); // Add a key to force re-rendering of the ContactMe modal

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
    if (!newOpen) {
      document.body.focus();
    }
  };

  const proSide = (option) => {
    if (option === 'profile') {
      setOpenDrawer(true);
    } else if (option === 'contact me') {
      setContactMeKey((prevKey) => prevKey + 1); // Increment the key to re-render the modal
    } else {
      navigate(option);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 400, display: 'block' }} role="presentation" onClick={toggleDrawer(false)}>
      <h1 className="text-xl py-10 text-center font-bold">My Name Is Robert Henry</h1>
      <AboutCard />
      <div className="ml-10">
        <h2 className="pt-5 py-2">Name : Robert Henry</h2>
        <h2 className="py-2 ">Gender : male</h2>
        <h2 className="py-2">Birthday : Jan/16/2002</h2>
        <h2 className="py-2 ">Location : Los Angeles USA</h2>
        <h2 className="py-2 ">Email : roberthenry0116@gmail.com</h2>
      </div>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HomeIcon sx={{ fontSize: 30 }} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="home"
              sx={{
                m: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ROBERT HENRY
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' }, padding: 0 }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={(event) => {
                      navigate((event.target.id).toLowerCase());
                      handleCloseNavMenu();
                    }}
                    sx={{ padding: '0px' }}
                  >
                    <Typography
                      sx={{ textAlign: 'center', width: '100%', margin: '0px', padding: '10px', float: 'left' }}
                      id={page}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ROBERT HENRY
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right', mr: 3 }}>
              {pages.map((page) => (
                <Button
                  id={page}
                  key={page}
                  onClick={(event) => {
                    navigate((event.target.id).toLowerCase());
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="avatar" src="/images/images.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px', padding: '0px' }}
                id="menu-appBar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    sx={{ padding: '0px' }}
                    onClick={(event) => {
                      proSide(event.target.id.toLowerCase());
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography id={setting} sx={{ textAlign: 'center', padding: '5px', width: '100%' }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Drawer
                open={openDrawer}
                onClose={toggleDrawer(false)}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {DrawerList}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ContactMe key={contactMeKey} />
    </>
  );
}
