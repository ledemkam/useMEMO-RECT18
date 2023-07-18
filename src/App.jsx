import Calculation from "./Components/Calculation"
import {useState} from 'react'
const App = () => {
  const[count,setCount] = useState(0)
  
  return (
    <div>
      <Calculation/>
      <button onClick={() => setCount(count + 1)}>incre</button>
    </div>
  )
}
export default App
