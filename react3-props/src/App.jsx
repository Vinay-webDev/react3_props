/* props = props meaning "propertiies" 
   props = *** these are the read-only properties that can 
           be shared between components ***
           
           we can pass props from parent component to 
           child components
           <component key=value/> 
*/
/*  numeric value you put inside {} */
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name=" Iron clad" age= {25} fighter={true} />      
    </>
  )
}

export default App
