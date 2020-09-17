import React from 'react'
import './App.scss'
import NavBar from './components/Navbar/Navbar'
import TourList from './components/TourList'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <TourList />
    </React.Fragment>
  )
}

export default App
