import React, { useMemo, useState } from 'react'
import CardQ from '../UI/MyCard/MyCard';
import {useSortedPosts} from '../../hooks/useUsers'

const GetRequestList = ({users}) => {

  const [sort, setSort] = useState('registration_timestamp')
  const sortedUsers = useSortedPosts(sort, users)


  return (
    <>
    {sortedUsers.map(user=>
      <CardQ User={user} key={user.id}/>  
    )}
  </>
  )
}

export default GetRequestList
