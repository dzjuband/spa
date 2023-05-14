import React  from 'react';

import Header from './Header';
import Footer from './Footer';
import Category from './Category';
import Home from './Home';
import About from './About';
import Error from './Error';
import CategoryDescription from './CategoryDescription'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const menu = [
  {nav:"/", descr:'Главная'},
  {nav:'/about', descr:'О сайте'},
  {nav:'/category', descr:'Категории'}
];

const submenu = [
  {nav:"/notebook", descr:'Ноутбуки'},
  {nav:'/monitor', descr:'Мониторы'},
  {nav:'/cellphone', descr:'Мобильные телефоны'}
];

function App() {
  return (
      <>

        <Router>
        <Header menu={menu}/>
          <Routes>
            <Route  exact path="/" element={<Home/>}  />
            <Route  exact path="/category" element={<Category submenu={submenu}/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/category/:catItem" element={<CategoryDescription/>}/>
            <Route  path="*" element={<Error/>}/>
          </Routes>
        </Router>
        <Footer/>
      </>


    
  );
}

export default App;
