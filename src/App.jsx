import { useEffect, useState } from 'react'
import fetch from './components/fetch';
import areaData from './assets/area.json'
import Map from './components/Map';
import './App.css'
import './components/map.css'
import Banner from './components/Banner'
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='layout'>
        <div className='layout-banner'>
          <Banner />
        </div>
        <div className='layout-main flex flex-col justify-start items-center p-10'>
          <Outlet />
        </div>
        <div className='layout-footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
