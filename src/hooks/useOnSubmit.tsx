import React, { useState } from 'react'
import {useConfetti} from './useConfetti'
import { useAxios } from './useAxios'
import {$authHost} from '../http/index'
import PostService from '../API/PostService'
import { IUser } from '../models'

interface IToken{
  token: string
}

export const useOnSubmit = ():[boolean,(e:IUser)=>void  , boolean, boolean] => {
  const [valid, setValid] = useState(false)
  const [confetti, setConfetti] = useConfetti()

  const [loading, data, error, request] = useAxios<IToken>({ 
    method: 'GET', url: 'https://frontend-test-assignment-api.abz.agency/api/v1/token' });
    
  // const [fetchToken, isLoading, error] = useFetching(async () => {
  //   const response = await PostService.getToken()
  //   console.log(response)
  //   localStorage.setItem('token', response.data.token) 
  // })

  
 
 
  // if (!data) return <p>Data was null</p>;

  const onSubmit = (e:IUser) =>{
    console.log("first") 
  {data && localStorage.setItem('token', data.token)}
  console.log(data)
    const formData = new FormData()
    formData.append('photo', e.photo[0])
    formData.append('phone', e.phone)
    formData.append('position_id', 4 as any)
    formData.append('email', e.email)
    formData.append('name', e.name)
    createUser(formData).then(data => console.log(data))
  } 

  const createUser = async (user:any) => {
    try{
      const {data} = await $authHost.post('', user)
      setValid(true)
      setConfetti(true)
      return data
    }catch(e:any){
      setValid(false)
      setConfetti(false)
      alert(e.response.data.message)
    }
}


  return [valid, onSubmit, loading, confetti]
}
