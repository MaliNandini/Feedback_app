import React from 'react'
import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
  
    const [feedback,setFeedback] = useState([
        {
        id : 1,
        text : 'g1',
        rating : 10
    },
    {
        id : 2,
        text : 'g2',
        rating : 7
    },
    {
        id : 3,
        text : 'g3',
        rating : 8
    }
])



const [edit,setEdit] = useState({
    item: {},
    edit : false
})
  //delete feedback
    const FeedbackDelete=(id) =>{
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=> item.id !== id))
        }
    } 
    
    //add feedback
  const addFeedback =(newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback , ...feedback])
  }

  //set to be edit feedback
  const EditFeedback =(item)=>{
    setEdit({
        item,
        edit: true
    })
  }

    //update the feedback data
    const updateFeedback = (id,updItem)=>{
        // console.log(id,updItem);
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item,...updItem} : item))
            
        )
        
    }

   
   
   


    return (
        <FeedbackContext.Provider value={{feedback,edit ,
        FeedbackDelete,addFeedback, EditFeedback, updateFeedback}}>
           {children}
        </FeedbackContext.Provider>
      )
}
  


export default FeedbackContext
