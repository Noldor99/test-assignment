import React, { FC } from 'react'
import { IUser } from '../../../models'
import style from './MyCard.module.sass'

interface CardProps{
  User: IUser 
}

const MyCard = ({User}:CardProps) => {

 


  return (
      <div className={style.card}>
        <div className={style.card__body}>
          <div className={style['card-img']}>
            <img src={User.photo} alt="false image" />
          </div>
          <p className={style.name} title={User.name}>{User.name}</p>
          <p className={style.position} title={User.position}>{User.position}</p>
          <p className={style.email} title={User.email}>{User.email}</p>
          <p className={style.tel} title={User.phone}>{User.phone}</p>
        </div>

      </div>
  )
}

export default MyCard