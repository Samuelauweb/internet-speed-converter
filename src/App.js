import { useState } from 'react'
import UnitControl from './components/UnitControl'
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

        {/* converter */}
        <div className='converter'>
          <div className='flex-1'>
            <div className='converter-title'>Set</div>
            <input
              type='number'
              onChange={handleInputChange}
              value={inputValue}
              className='input-number'
              min='0'
            />
          </div>
          <span className='angle-icon fa-2x' style={{ marginTop: '30px' }}>
            <i className='fas fa-angle-right'></i>
          </span>
          <div className='text-right flex-1'>
            <div className='converter-title'>Show</div>
            <input
              type='text'
              className='input-number text-right'
              disabled
              value={inputValue / 8}
            />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue}/>
    </div>
  )
}

export default App
