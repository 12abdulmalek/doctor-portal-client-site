import * as React from 'react';
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
import { loadFromLocalstorage } from '../../../utils/handleLocalhost';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
const Menubar = () => {
    const [data,setData] = React.useState({});
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setUser] = React.useState(false);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        event.preventDefault();
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        event.preventDefault();
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = (event) => {
        event.preventDefault();
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = (event) => {
        event.preventDefault();
        setAnchorElUser(null);
    };
    let getUser = loadFromLocalstorage();
    let { token } = useAuth();
    if (token?.accessToken) {
        getUser = token;
    }
    else if(token?.accessToken==null && user===true){
        getUser = token;
    }
    const logOut = e => {
        setUser(true);
        localStorage.removeItem('user');
        navigate('/');
    }
    React.useEffect(()=>{
        fetch('http://localhost:5000/profile')
        .then(res=>res.json())
        .then(data=>{
           
            const filter = data.filter(item=>item.email===getUser?.email);
            setData(...filter);
        })
    },[])
    
    return (
        <div>
            <Container>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"

                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
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
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <MenuItem >
                                        <Typography textAlign="center">home</Typography>
                                    </MenuItem>
                                    <MenuItem >
                                        <Typography textAlign="center">
                                            <Link to='/specialities'>Consaltation</Link>
                                        </Typography>

                                    </MenuItem>
                                    <MenuItem >

                                        <Typography textAlign="center">
                                            <Link to='/appointment'>Appointment</Link>
                                        </Typography>


                                    </MenuItem>
                                    <MenuItem >
                                        <Typography textAlign="center">home</Typography>
                                    </MenuItem>
                                    <MenuItem >
                                        <Typography textAlign="center">home</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>

                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
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
                                LOGO
                            </Typography>



                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                <MenuItem >
                                    <Typography textAlign="center">home</Typography>
                                </MenuItem>
                                <MenuItem >
                                    <Typography textAlign="center">
                                        <Link to='/specialities'>Consaltation</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem >
                                    {
                                        getUser?.accessToken && <Typography textAlign="center">
                                            <Link to='/appointment'>Appointment</Link>
                                        </Typography>
                                    }
                                </MenuItem>
                                <MenuItem >
                                    <Typography textAlign="center">home</Typography>
                                </MenuItem>
                                <MenuItem >
                                    <Typography textAlign="center">home</Typography>
                                </MenuItem>
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                {

                                    getUser?.accessToken && <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                }
                                {
                                    !getUser?.accessToken && <MenuItem >
                                        <Typography textAlign="center">
                                            <Link to="/login">
                                                <Button variant="contained">Login</Button>
                                            </Link>
                                        </Typography>
                                    </MenuItem>

                                }
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
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
                                  
                                    <MenuItem >
                                        <Typography textAlign="center">
                                        <Link to={`/profile/${data._id}`}>Profile</Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem >
                                        <Typography textAlign="center">
                                            <Link to={`/profile/update/${data._id}`}>Update Profile</Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem >
                                        <Typography textAlign="center">
                                            <Button onClick={logOut}>Logout</Button>
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Container>
        </div>
    );
};
export default Menubar;
