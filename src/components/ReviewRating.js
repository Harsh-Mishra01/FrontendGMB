import React from 'react'

export default function ReviewRating(props) {
  return (
    <>
        
        <div className="vertical-card p-3">
            All Time
            <center className="m-4"><h4>Overall</h4></center>
            <div className="rating-container m-1">
                <div className="rate-heading">
                    Average Rating
                </div>
                <div className="rate-body">
                    {props.rating.toFixed(2)}
                </div>
            </div>
            <div className="rating-container m-1">
                <div className="rate-heading">
                    Total Reviews
                </div>
                <div className="rate-body">
                    {props.review}
                </div>
            </div>
        </div>
    </>
  )
}
