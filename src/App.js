
import './index.css';
import { Routes ,Route} from 'react-router-dom'

import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Data/FeedbackData'
import { useState } from 'react';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import About from './Components/About';
import AboutIconLink from './Components/AboutIconLink';
import {FeedbackProvider} from './Components/FeedbackContext'

function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  // console.log(FeedbackData)

 


  return (
   <>
         <FeedbackProvider>
         <Header />
          <div className='container'>
           
              <FeedbackForm  />
              <FeedbackStats />
              <FeedbackList feedback={feedback} setFeedback={setFeedback} />
            <Routes>
            <Route path='/about' element={<About/>}/> 
            
            </Routes>

            <AboutIconLink/>
          </div>
          </FeedbackProvider>
          </>
  );
}

export default App;
