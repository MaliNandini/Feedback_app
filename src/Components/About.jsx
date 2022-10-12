import React , {useContext} from 'react'
import Card from './Shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a react app to leave feedback for a project or service</p>
         
           <p>
            <Link to="/"> Back to Home</Link>
           </p>
        </div>
        
      </Card>
    </div>
  )
}

export default About
