import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import { Button } from '@carbon/react'

export default function App() {
    return (
        <React.StrictMode>
            <NavigationBar />
            <Button>Button</Button>
            <Router>
                <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
            </Router>
        </React.StrictMode>
    )
}

const root = React
