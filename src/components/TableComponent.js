import React from 'react'

export default function TableComponent(props) {
  return (
    <>
        <div className="p-3 m-2" style={{ backgroundColor: props.bcolor, opacity: 0.7 }}>
            <span className='table-heading'>
                {props.title}
            </span>
            <table className="table table-striped mt-4">
                  <thead>
                      <tr>      
                        {props.head.map((item) => {
                            return(<th>{item}</th>)
                        })}
                      </tr>
                  </thead>
                  <tbody>      
                    {props.rows && props.rows[0].map((item, i) => {

                        return (
                            <>
                                <tr>
                                    {item.map((counts) => {
                                        return (<td>{counts}</td>)
                                        
                                    })}
                                </tr>
                            </>
                        )
                    })}
                  </tbody>
            </table>
        </div>
    </>
  )
}
