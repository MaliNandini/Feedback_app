import React,{useContext} from 'react'
import Feedbackitem from './Feedbackitem'
// import PropTypes from 'prop-types'
import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from './FeedbackContext' 

function FeedbackList() {
    const {feedback } = useContext(FeedbackContext)
    if( !feedback || feedback.length===0){
        return <p>no feedback yet</p>
    }
    // console.log(feedback)

    return  (
      <div className='feedback-list'>
      <AnimatePresence>
       {feedback.map((item)=>(
         <motion.div
           key={item.id}
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}>
           <Feedbackitem key={item.id} item={item} />
          </motion.div>
         
       ))}
      
      </AnimatePresence>
    
    </div>
    )
  

}

// FeedbackList.propType = {
//     feedback : PropTypes.array
// }

export default FeedbackList
