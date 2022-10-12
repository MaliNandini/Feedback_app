import React from 'react'
import PropTypes from 'prop-types'

function Card({children,reverse}) {
  return (
  <>
    {/* conditionally class entered
     <div className={`card ${reverse && 'reverse'}`}>
     {children}
     </div> */}

     {/* conditionally style entered */}
     <div 
     className='card'
     style={{
         backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#fff',
         color : reverse ? '#fff' : 'rgba(0,0,0,0.4)',
     }}>
         {children}
     </div>

    </>

  )
}

Card.defaultProps={
    reverse : false
}

Card.proptype = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool,
}

export default Card