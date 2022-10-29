import React from 'react'
import style from './ReInput.module.css'
import {useFormContext} from 'react-hook-form'

const ReInput = ({header, nameInput, type, helperText}) => {

  const {
    register,
    formState:{errors}
  } = useFormContext({mode:'onCange'})

   
  const errorClass = errors?.[nameInput] ? [
    {borderColor: '#CB3D40'},
    {display: 'none'},
    {color: '#CB3D40'}
   ] : [
    {borderColor: '#D0CFCF'},
    {display: 'block'},
    {color: '#7E7E7E'}
   ] 


  
  return (
    <>
      <div className={style.inputBox}>
        <input
          style={errorClass[0]}
          type={type}
          name={nameInput}
          required="required"
          {...register(nameInput)}
        />
        
        <span style={errorClass[2]}>{header}</span>
        <p style={errorClass[1]}>{helperText}</p>
      </div>
       <div style={errorClass[2]}>{errors?.[nameInput]?.message}</div>
    </>


  ) 
}

export default ReInput