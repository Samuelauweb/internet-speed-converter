import { useState } from 'react'
import UnitControl from './components/UnitControl'
import UnitConverter from './components/UnitConverter'
import CardFooter from './components/CardFooter'
import './App.css'

const App = () => {
  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='container'>
      <div className='card-header'>Network Speed Converter</div>
      <div className='card-body'>
        <UnitControl />
        <UnitConverter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  )
}

export default App
