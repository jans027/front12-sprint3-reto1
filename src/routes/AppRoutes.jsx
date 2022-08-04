import { ChakraProvider } from '@chakra-ui/react';
import '../Global.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {LogOut}from '../components/LogOut';
// import {ButtonNavBar} from '../components/ButtonNavBar';

import {Home2} from '../components/Home2';

import {LogIn} from '../components/LogIn';
import {SingUp} from '../components/SingUp';

import Home from '../containers/Home';

import {AuthProvider} from '../context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina2 from '../components/Screen1';
import Pagina3 from '../components/Screen2';
import Pagina4 from '../components/Screen3';
import NavBar from '../components/NavBar';





class AppRoutes extends Component {
    render() {
        return (
            <AuthProvider>
            <ChakraProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/Pagina4" element={<Pagina4 />} />
                        <Route path="/Pagina3" element={<Pagina3 />} />
                        <Route path="/Pagina2" element={<Pagina2 />} />
                        <Route path="/" element={<Home />} />
                        
                        <Route path="/home2" element={<Home2/>} />
                        
                        <Route path="/logout" element={<LogOut />} />
                        <Route path="/singup" element={<SingUp/>} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="*" element={<Navigate to="/"/>}/> 
                    </Routes>
                </BrowserRouter>
                </ChakraProvider>
            </AuthProvider> 

        );
    }
}

export default AppRoutes;