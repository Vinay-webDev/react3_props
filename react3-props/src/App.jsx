/* props = props meaning "propertiies" 
   props = *** these are the read-only properties that can 
           be shared between components ***
           
           we can pass props from parent component to 
           child components
           <component key=value/> 
*/
/*  numeric value you put inside {} */
/* now using same component to pass 
different data */
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name=" Iron clad" age= {25} fighter={true} />
      <Student name=" Jack bulwark" age= {30} fighter={true} />
      <Student name=" April" age= {25} fighter={false} />
      <Student name=" lynx" age= {26} fighter={true} />       
    </>
  )
}

export default App
