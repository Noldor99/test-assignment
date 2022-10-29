import React, { useContext, useState } from 'react'
import { ScrollContext } from '../../context/ScrollContext'
import Logo from '../UI/Logo/Logo'
import MyButton from '../UI/MyButton/MyButton'
import style from './Navebar.module.sass'
import {Link} from 'react-scroll'

const Navebar = () => {

 const {scrolling} = useContext(ScrollContext)
  
  return (
    <div className={style.Navebar}>
      <div className={style.Navebar__container}>
        <Logo/>
        <div className={style.Navebar__button}>
          <div className='w-[100px]'>
              <MyButton onClick={scrolling}>Users</MyButton>
          </div>
          <div className='w-[100px]'>
          <Link 
            to="post__request"
            smooth= {true}
            >
              <MyButton>Sign up</MyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navebar