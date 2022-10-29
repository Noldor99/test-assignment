import React, { useEffect, useState } from 'react'
import RadioInput from "./RadioInput/RadioInput";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import { IPositions, IPositionsGet, IUser } from '../../models';



const PositionsList = () => {

  const [positionsList, setPositionsList] = useState<IPositions[]>([]);

  const [fetchPositions, isLoadingToken, errorToken] = useFetching(async () => {
    // const response = await PostService.getByPositions()
    const response = await axios.get<IPositionsGet>('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    setPositionsList(response.data.positions);
})


  useEffect(()=>{
    fetchPositions()   
  },[])


  return (  
    <>
      {isLoadingToken && <Loader/>}
      {positionsList.map(({ id, name, checked}) => (
        <RadioInput 
         id={id} 
         name={name} 
         checked={checked}
         key={id}
        />
      ))}
    </>
  )
}

export default PositionsList