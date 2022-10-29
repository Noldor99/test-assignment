import { useEffect, useState } from 'react'

export const useConfetti = ():[boolean, React.Dispatch<React.SetStateAction<boolean>>] => {

  const [confetti, setConfetti] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setConfetti(false)
    },12000)
  },[confetti])



  return [confetti, setConfetti]
}
