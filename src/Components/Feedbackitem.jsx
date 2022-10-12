import React ,{useContext} from 'react'
import Card from './Shared/Card'
// import PropTypes from 'prop-types'
import {FaTimes , FaEdit} from 'react-icons/fa'
import FeedbackContext from './FeedbackContext'


function Feedbackitem({item }) {
  const {FeedbackDelete, EditFeedback} = useContext(FeedbackContext)
    
   
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close'  onClick={()=> FeedbackDelete(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <button className='edit'  onClick={()=>  EditFeedback(item)}>
            <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text} </div>
      
    </Card>
  )
}

// Feedbackitem.propType = {
//     item: PropTypes.object.isRequired
// }

export default Feedbackitem
