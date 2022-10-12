import React,{useContext} from 'react'
// import PropTypes from 'prop-types'
import FeedbackContext from './FeedbackContext';



function FeedbackStats() {
   const {feedback} = useContext(FeedbackContext)

    //calculate rating average
    let average = 
    feedback.reduce((accumalator,current) =>{
        return accumalator + current.rating
    },0) / feedback.length;

    // console.log(average);
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average)? 0 : average}</h4>
      
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback : PropTypes.array.isRequired
// }

export default FeedbackStats
