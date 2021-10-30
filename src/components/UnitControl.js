import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UnitControl = () => (
  <div className='unit-control'>
    <div className='unit'>Mbps</div>
    <span className='exchange-icon fa-fw fa-stack'>
      <FontAwesomeIcon icon={['far', 'circle']} className='fa-stack-2x' />
      {/* <i className='far fa-circle fa-stack-2x'></i> */}
      <FontAwesomeIcon
        icon={['fas', 'exchange-alt']}
        className='fa-stack-1x'
      />
      {/* <i className='fas fa-exchange-alt fa-stack-1x'></i> */}
    </span>
    <div className='unit'>MB/s</div>
  </div>
)

export default UnitControl