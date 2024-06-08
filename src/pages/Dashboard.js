import React from 'react'
import '../stylesheets/dashboard.css';
import TableComponent from '../components/TableComponent';
import { useEffect, useState } from 'react';
import manipalLogo from '../assets/Logos/manipalLogo.png'
import ajanataLogo from '../assets/Logos/ajantaLogo.jpg'
import Navbar from '../components/Navbar';
import ContentContainer from '../components/ContentContainer';
import ReviewRating from '../components/ReviewRating';
import GraphicalContainer from '../components/GraphicalContainer';

export default function Dashboard() {
    


    const [showAllData, setAllData] = useState(null)
    const [analysisData, setAnalysisData] = useState()
    var verificationData;
    const username1 = localStorage.getItem('username')
    const psw1 = localStorage.getItem( 'psw' )
    const api = localStorage.getItem('API')
    var username;
    useEffect(() => {

        async function getAnalysisData()
        {
            const analysisData = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },        
                
                body: JSON.stringify({'username': username1, 'psw': psw1})
            })
            const result = await analysisData.json();
            setAnalysisData(result)
        }
        getAnalysisData() 
        async function getAllData()
        {
            const allData = await fetch(api) 
            const response = await allData.json()
            setAllData(response)
        }
        getAllData()
    }, [])
    if (analysisData) {
        username = analysisData[ 0 ].user;
        localStorage.setItem('userlogo', username)
        verificationData = [
            {"Total Profiles": analysisData[0]['Total Profiles']},
            {"Verified Profiles": analysisData[0]['Total Verified']},
            {"Unverified Profiles": analysisData[0]['Unverified']},
            {"Not Intrested": analysisData[0]['Not Intrested']},
        ]
    }
    const logo = username == 'Manipal' ? manipalLogo : ajanataLogo;
    return (
        // <div style={{background: 'linear-gradient(to right, #07509D 119.23%, 180deg, #30C3BB 0%)'}}>
        <div>
            <Navbar logoimg={logo} username={username} serach={true}></Navbar>
            {verificationData && (
                <ContentContainer data = {verificationData}></ContentContainer>
            )}
            <div className='content-container-1 m-3'>
                <div className="left-container m-1">
                    {showAllData && (
                        <ReviewRating review={showAllData.reviewRating[0].totalreviews} rating={showAllData.reviewRating[0].averagerating/95}></ReviewRating>
                    )}
                </div>
                <div className="right-container m-1">
                    {showAllData && (
                        <>
                            <GraphicalContainer gtype={"AreaChart"} title={'Calls'} callsGraphData={showAllData.graphDataCalls[0]} bcolor={'#b1efec'} width={'50%'}></GraphicalContainer>
                            <GraphicalContainer gtype={"AreaChart"} title={'Searches'} callsGraphData={showAllData.graphDataSearches[0]} bcolor={'#b1efec'} width={'50%'}></GraphicalContainer>
                        </>
                    )}
                </div>       
            </div>
            {showAllData && (
                <ContentContainer data = {showAllData.analysis}></ContentContainer>
            )}
            {/* <div style={{ display: (username === 'Manipal' ? 'block' : 'none') }}>
                <div className="content-container-3 m-2">
                    <TableComponent title="Top Five Unit Searches" />
                    <TableComponent title="Top Five Doctor Searches"></TableComponent>
                </div>
            </div>
            <div style={{ display: (username !== 'Manipal' ? 'block' : 'none') }}>
                <div className="content-container-3 m-2">
                    {tableData && 
                        <TableComponent title="Top Five Doctor Searches" data={tableData}></TableComponent>
                    }
                </div>
            </div> */}
            <br/>
        </div>
    )
}
