import Footer from '@/layout/footer/Footer'
import Header from '@/layout/header/Header'
import ToTop from '@/components/toTop/ToTop'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='min-h-[80vh]'>
        <Outlet/>
      </main>
      <Footer/>
      <ToTop />
    </>
  )
}

export default React.memo(Layout)