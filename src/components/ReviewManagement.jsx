import React, { useContext, useEffect, useState } from 'react'
import { SharedContext } from '../context/SharedContext'

export default function ReviewManagement() {
    const { getDrName } = useContext( SharedContext )
    const api = localStorage.getItem( 'API' )
    const [getDocData, setDocData] = useState()
    useEffect(() => {
        if (getDrName) {
        async function getDocData() {
            const response = await fetch('https://gmb-wkeo.onrender.com' + api + '/docData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },        
            body: JSON.stringify({ "businessName": getDrName })
            });
            const data = await response.json();
            setDocData(data);
        }
        getDocData();
        }
    }, [getDrName])
    return (
        <div>REVIEW</div>
    )
}
