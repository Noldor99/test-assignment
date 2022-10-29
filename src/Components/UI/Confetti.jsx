import React, {useState } from 'react'
import Confetti from 'react-confetti'

export default () => {

  const [dimention, setDimention] = useState(
    {width: window.innerWidth, height:window.document.body.offsetHeight}
  )
  return (
    <>
      <Confetti
        width={dimention.width*0.97}
        height={dimention.height}
        tweenDuration={3000}
        numberOfPieces={1200}
        gravity={1}
      />
    </>

  )
}