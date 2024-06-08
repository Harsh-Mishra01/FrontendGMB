import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import manipalLogo from '../assets/Logos/manipalLogo.png'
import ajanataLogo from '../assets/Logos/ajantaLogo.jpg'
import BasicDetailsComponent from '../components/BasicDetailsComponent';
import { SharedContext } from '../context/SharedContext';
export default function DocReport() {
    var username;
    const [getDrName, setDrName] = useState('')
    const [analysisData, setAnalysisData] = useState()
    const userlogo = localStorage.getItem('userlogo')
    const psw1 = localStorage.getItem('psw')
    const logo = userlogo == 'Manipal' ? manipalLogo : ajanataLogo;
  return (
      <Fragment>
        <SharedContext.Provider value={{getDrName, setDrName}}>      
            <Navbar logoimg={logo} username={username} serach={false}></Navbar>
            <BasicDetailsComponent></BasicDetailsComponent>
        </SharedContext.Provider>
    </Fragment>
  )
}
