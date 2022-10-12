import React from 'react'
import {useNavigate, Route,Routes} from 'react-router-dom'

function Post() {

  const navigate = useNavigate()
// const status = 400;

// if(status === 400){
//   return <Navigate to='/notFound'/>
// }

const goBack = () =>{
  navigate('/about')
}
  return (
    <div>
       <h1>post</h1>
       <button onClick={goBack}>go to bahome</button>
       <Routes>
        <Route to='/show' element={<h1>hello world
        </h1>}/>
       </Routes>
       
    </div>
  )
}

export default Post
