import { useState } from 'react'
import generateRandomNumber from './generateRandomNumber'

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNumber(maxNum))
  const changeNum = () => {
    setRandomNum(generateRandomNumber(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeNum}>Generate new number </button>
    </div>
  )
}

export default RandomNumber
