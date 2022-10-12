import React from 'react'
import PropTypes from 'prop-types'


function Header({text }) {
   
  return (
    <header style={ {color : '#ff6a95'}}>
        <div className='container'>
         <h1>{text}</h1>
        </div>
   
    </header>
  )
}

Header.defaultProps = {
    text : 'feedback Ui',
   
}

Header.propType = {
    text : PropTypes.string,
}

export default Header
