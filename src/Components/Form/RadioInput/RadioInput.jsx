import React from 'react';
import style from './RadioInput.module.css';
import {useFormContext} from 'react-hook-form'

const RadioInput = ({id, name ,checked}) => {

  const {
    register,
    formState:{errors}
  } = useFormContext()

  return (
    <div className={style.radio__container}>
        <label key={id} className={style.radio__label}> 
          <input
            className={style['radio-box']} 
            type="radio"
            name="options"
            value={name}
            checked={checked}
            {...register('position')}
          />
          <span className={style['radio-style']}></span>
          {name}
        </label>
        <div>{errors?.[name]?.message}</div>
    </div>

  )
}

export default RadioInput