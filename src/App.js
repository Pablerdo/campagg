import React from 'react'
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {AuthProvider} from "./contexts/AuthContext";


function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#01563f",
            },
        },
    });
    return (
        // BEM
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <div className="app">
                    <Router>
                        <Header />
                        <Routes>
                            <Route exact path='/search' element={<PrivateRoute/>}>
                                <Route exact path='/search' element={<SearchPage/>}/>
                            </Route>
                            <Route exact path='/' element={<PrivateRoute/>}>
                                <Route exact path='/' element={<Home/>}/>
                            </Route>
                        </Routes>
                        <Footer />
                    </ Router>
                </div>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
