import React, { createContext, useState } from 'react'


export const ScrollContext = createContext({
  onScroll: false,
  scrolling: () => {}
})

export const ModalState = ({children})=>{

  const [onScroll, setOnScroll] = useState(false)
 
  const scrolling = () => setOnScroll(!onScroll)
 

  return (
    <ScrollContext.Provider value={{scrolling, onScroll }}>
      { children }
    </ScrollContext.Provider>
  )

}