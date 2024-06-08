import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import manipalLogo from '../assets/Logos/manipalLogo.png'
import ajanataLogo from '../assets/Logos/ajantaLogo.jpg'
import { SharedContext } from '../context/SharedContext'
import ReviewManagement from '../components/ReviewManagement'

export default function Review() {
    const username1 = localStorage.getItem('username')
    const logo = username1 == 'Manipal' ? manipalLogo : ajanataLogo;
    const [getDrName, setDrName] = useState('')    
    return (
        <>
            <SharedContext.Provider value={{getDrName, setDrName}}>
                <Navbar logoimg={logo} username={username1} serach={false}></Navbar>
                <ReviewManagement></ReviewManagement>
            </SharedContext.Provider>
        </>
  )
}
