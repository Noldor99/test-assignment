import React from "react";
import {useFormContext} from 'react-hook-form'
import style from './FileUpload.module.sass'





const FileUpload = () => {
  const {
    register,
    formState:{errors, isValid}
  } = useFormContext()

  const errorClass = errors?.photo ? [
    {borderColor: '#CB3D40'},
    {display: 'none'},
    {color: '#CB3D40'}
   ] : [
    {borderColor: ''},
    {display: 'block'},
    {color: '#7E7E7E'}
   ] 
  

 
  return (
    <div>
      <label className={style['drop-container']} htmlFor="picture"> 
      <span style={errorClass[0]} className={style['drop-title']}>Upload</span>
        <input 
          style={errorClass[0]}
          className={style.upload__input}
          id="picture" {...register("photo")} 
          type="file" 
          />
          <div className={style.FileUploadError} style={errorClass[2]}>{errors?.picture?.message}</div>
        </label>
    </div>
  )
}

export default FileUpload
