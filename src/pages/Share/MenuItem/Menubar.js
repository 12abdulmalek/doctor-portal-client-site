import { Logout } from '@mui/icons-material';
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Menubar.css'
import Profile from './Profile';

const Menubar = () => {
    const {setItems,items} = useAuth();
    // const data = localStorage.getItem('token');
    const getToken = localStorage.getItem('token');
    const parse = JSON.parse(getToken);
    setItems(parse?.email);
    // console.log(items);
    return (
        <div className='menu-items'>
            <Container>
                <div className='menu-sec'>
                    <div className='menu-logo'>
                       <Link to="/">home</Link>
                    </div>
                    <div>
                        <input type="checkbox" id="check"></input>
                        <label htmlFor="check" name='check'>
                            <i id='open-btn'> <IoIosArrowDropdownCircle /></i>
                            <i id='close-btn'><IoIosArrowDropupCircle /></i>
                        </label>
                        <div className='menu-bar' id='menu-bar'>
                            <ul>
                                <li>   <Link to='/specialities'> Consultation</Link></li>
                                <li>item2</li>
                                <li>
                                    <Link to='/addDoctor'>addDoctor</Link>
                                </li>
                                <li>
                                 {
                                   items&& <Profile></Profile>
                                 }  
                                 {
                                     !items&&  <Link to='/login'>Login</Link>
                                 }                       
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Menubar;