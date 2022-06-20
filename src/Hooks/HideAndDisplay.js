import React, { useState } from 'react'

const HideAndDisplay = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const[headerFlag,setHeaderFlag]=useState(false);

      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
  return (
    {
        screenSize,
        getDimension,
        setDimension,
        headerFlag,
        setHeaderFlag,
    }
  )
}

export default HideAndDisplay