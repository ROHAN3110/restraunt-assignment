import React from 'react'

const Restraunt = ({restraunt}) => {
  return (
    <div key={restraunt.id}className="card">
           <img width="254" height="160px" src={restraunt.image} />
           <div className="restaurant-details">
               <div className="restaurant-title">{restraunt.name}</div>
               <div className="restaurant-subtitle">
                   {restraunt.category.join(",")}
                 </div>
           </div>
           <div className="restaurant-info">
               <div className="restaurant-ratings">
                   <i className="material-icons star-icon">star</i> {restraunt.rating}
               </div>
                .<div className="restaurant-delivery-timings"> {restraunt.deliveryTimings}</div> .
               <div className="restaurant-cost-for-two">₹{restraunt.costForTwo}</div>
           </div>
           <div className="offer-banner">
               <span className="material-icons"> local_offer </span>
               <span className="offer-text">{restraunt.offers.join(" | ")}</span>
           </div>
       </div>
  )
}

export default Restraunt
