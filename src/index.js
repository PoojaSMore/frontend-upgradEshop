import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import AddProductsPage from './components/AddProducts';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <section>
          <Routes>
            <Route path='/' element={ <NavigationBar /> }></Route>
            <Route path='/login' element={ <SignInPage /> }></Route>
            <Route path='/signup' element={ <SignUpPage /> }></Route>
            <Route path='/addproducts' element={ <AddProductsPage /> }></Route>
          </Routes>
        </section>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
