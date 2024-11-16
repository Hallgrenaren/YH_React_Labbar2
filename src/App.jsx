//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import SizeTracker from './components/SizeTracker.jsx'

function App() {
    //Lägg till useEffect, som Scrimba windowwidth

    return (
        <>
            <Navbar />
            <Body />
            <SizeTracker />
        </>
    )
}

export default App
