import React from 'react'

export default function CardContainer(props) {
  return (
    <>
        <div className="view-counts m-2">
            <div className="rate-heading">
                <span>{props.head}</span>
            </div>
            <div className="rate-body">
                {props.val}
            </div>
        </div>
    </>
  )
}
