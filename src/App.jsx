import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className='max-w-7xl min-h-screen mx-auto px-4'>
      <Outlet/>
    </main>
    </>
  )
}

export default App