import React from 'react'
import Restraunt from './Restraunt'

const Restraunts = (props) => {
  return (
    <div className="container divider">
    <div className="cards">
        {props.restraunts.map(restraunt =>(
         <Restraunt key={restraunt.id} restraunt={restraunt}/>
        ))}
       
       
    </div>
</div>
  )
}

export default Restraunts
