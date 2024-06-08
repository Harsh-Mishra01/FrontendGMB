import React, { Fragment, useEffect, useState, useContext } from 'react'
import logoutlogo from '../assets/Logos/logout.png'
import { useNavigate, Link } from 'react-router-dom'
import { SharedContext } from '../context/SharedContext'

export default function Navbar( props ) {
  const { setDrName } = useContext(SharedContext)
  const navigate = useNavigate();
  const [ getAllnames, setAllNames ] = useState()
  const [ getName, setName ] = useState()
  const api = localStorage.getItem( 'API' )
  function logoutHandeler()
  {
    // alert('hello world')
    navigate('/')
  }
  function nameHandelar( e )
  {
    setName( e.target.value )
    setDrName( e.target.value )
  }
  useEffect(() => {
    async function getAllDoctrosNames()
    {
      const docNames = await fetch(api + '/getAllDocNames', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const allNames = await docNames.json()
      // alert(allNames)
      setAllNames(allNames)
    }
    getAllDoctrosNames()
  }, [])
  return (
    <Fragment>
      <div className='navigation-bar P-1'>
          <div className='nav-logo'>
              <img src={props.logoimg} alt='logo'></img>
          </div>
          <div className='nav-caption'>
              <span style={{ color: '#07509D' }}>GOOGLE MY</span>&nbsp;<span style={{ color: '#30C3BB' }}> BUSINESS PERFORMANCE</span>
          </div>
          <div className='nav-l'>
            <img src={logoutlogo} alt='logo' onClick={logoutHandeler}></img>
          </div>
      </div>
      <hr/>
      <div className="sub-nav">
        <div className="filter-contents p-1" style={{display: (props.username === 'Manipal' && props.serach ? 'block' : 'none') }}>
          <select className="ms-4 p-2 mb-2" name="" id="">
              <option value="">By Cluster</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="Central">Central</option>
          </select>
          <select className="ms-4 p-2 mb-2" name="" id="">
              <option value="">By Unit</option>
              <option value="North">Old Airport Road</option>
              <option value="South">Doddaballapura</option>
              {/* <option value="Central">Central</option> */}
          </select>
        </div>
        <div className="filter-contents p-1" style={{display: (!(props.serach) ? 'block' : 'none') }}>
          <label>Select Doctor:</label>&nbsp;
          <input type='text' list='getDoctor' placeholder='Doctor Name' value={getName} onInputCapture={nameHandelar}/>
          { getAllnames && 
            <datalist id='getDoctor'>
              {getAllnames.map((item) => {
                return(<option value={item}>{item}</option>)
              })}
            </datalist>
          }
        </div>
        <div className="nav-contents p-2">
          <Link to="/Dashboard" className="p-1 pe-5">Dashboard</Link>
          <Link to="/Doc-report" className="p-1 pe-5">Doc Report</Link>
          <Link to="/Review Management" className="p-1 pe-5">Review Management</Link>
          <Link to="/gen-ai" className="p-1 pe-5">Gen AI</Link>
        </div>
      </div>
    </Fragment>
  )
}
