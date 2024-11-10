//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'

function App() {
    //const [count, setCount] = useState(0)

    return (
        <div className="container">
            <Navbar />
            <Body />
        </div>
    )
}

export default App
