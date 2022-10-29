import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollContext } from '../context/ScrollContext'
export const useScroling = () => {

  const [qq, setQq] = useState(false)

  const ref = useRef(null)
  const {onScroll} = useContext(ScrollContext)

  function Scroll(){
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  
  useEffect(()=>{ 
    if(qq){
      Scroll() 
    }
    return setQq(true)
  },[onScroll])


  return [ref]
}
