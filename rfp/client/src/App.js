import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home';
import {ThemeProvider } from '@mui/material/styles';
import theme from './Theme/theme';

import SignUp from './components/signUp';
import Login from './components/login';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';

import RfpQuotes from './components/rfpQuotes';
import Admin from './components/admin';
import VendorList from './components/vendors';
import Categories from './components/categories';
import RfpCreate from './rfpCreate';
import RfpQuotesAdmin from './components/rfpQuotesAdmin';
import VendorRfpCreate from './components/vendorRfpCreate';
import RfpList from './components/rfpList';
import MainCategories from './components/mainCategories';

const App = () => {
  return (
    <Provider store={store}> 
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rfpquotes" element={<RfpQuotes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/rfpList" element={<RfpList />} />
        <Route path="/rfpQuotes/admin" element={<RfpQuotesAdmin />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/mainCategories" element={<MainCategories />} />
        <Route path="/categories/rfpcreate" element={<RfpCreate />} />
        <Route path="/vendor/rfpcreate" element={<VendorRfpCreate />} />
  
      </Routes>
    </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
