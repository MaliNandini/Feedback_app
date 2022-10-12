import React,{useState,useContext,useEffect} from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './FeedbackContext'


function FeedbackForm() {
 const[text,setText ] = useState('')
 const[btnDisable,setbtnDisable ] = useState(true)
 const[message,setmessage ] = useState('')
 const[rating,setRating ] = useState('')

 const {addFeedback,edit,updateFeedback} = useContext(FeedbackContext)

 useEffect(() => {
  if(edit.edit === true)
    {
      setbtnDisable(false)
      setText(edit.item.text)
      setRating(edit.item.rating)
  } 
},[edit])



    const handleTextChange = (e)=>{
      if(text === ''){
        setbtnDisable(true)
        setmessage(null)
      }
      
      else if( text !== '' && text.trim().length<=10){
        setmessage('Text must be at least 10 characters')
        setbtnDisable(true)
      }

      else{
        setmessage(null)
        setbtnDisable(false)
      }



        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(text.trim().length>10){
        const newFeedback = {
          text,rating,
        }

      if(edit.edit === true){
        updateFeedback(edit.item.id , newFeedback)
      }else{
        addFeedback(newFeedback)
      }

      

        setText('')
      }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How Would you rate your service with us?</h2>
            <RatingSelect  select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input type="text"  placeholder='Write a review'  onChange={handleTextChange} value={text}/>
                <Button type='submit' isDisable={btnDisable}>send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
    
    
  )
}

export default FeedbackForm
