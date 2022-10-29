import React from 'react'
import ReInput from "./ReInput/ReInput";

const InputListParam = [
  {nameInput:'name', type:'text', header:'First Name', helperText: ''},
  {nameInput:'email', type:'email', header:'Email', helperText: ''},
  {nameInput:'phone', type:'text', header:'Phone', helperText: '+38 (XXX) XXX - XX - XX'},
]

const InputList = () => {
  return (
    <div className='pb-[25px]'>
      {InputListParam.map(({nameInput, type, header, helperText})=>
        <ReInput 
          nameInput={nameInput} 
          type={type} 
          header={header} 
          helperText={helperText}
          key={nameInput}/>
      )}
    </div>
  )
}

export default InputList
