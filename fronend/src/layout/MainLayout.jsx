import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>

        <Header/>

            <Outlet/>

        <Footer/>

    </div>
  )
}

export default MainLayout
