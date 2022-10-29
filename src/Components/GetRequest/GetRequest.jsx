import { useEffect, useRef, useState } from 'react'
import PostService from '../../API/PostService'
import { useFetching } from '../../hooks/useFetching'
import Loader from '../UI/Loader/Loader'
import MyButton from '../UI/MyButton/MyButton'
import style from './GetRequest.module.sass'
import GetRequestList from './GetRequestList'
import {useScroling} from '../../hooks/useScroling'

const GetRequest = () => {

const [mef] = useScroling()

const [users, setUser] = useState([])
const [totalPages, setTotalPages] = useState(0);
const [count, setCount] = useState(6);
const [page, setPage] = useState(1);


  const [fetchPage, isLoading, error] = useFetching(async (page, count) => {
    const response = await PostService.getPage(page, count)
    setUser([...users, ...response.data.users])
    const totalPages = response.data.total_pages
    setTotalPages(totalPages)
  })

  useEffect(()=>{
    fetchPage(page, count)
  },[page]) 


  return (
    <div className={style.getrequest}>
      <h2 id='simple-test' ref={mef}>Working with GET request</h2>
      <div className={style.getrequest__container}>
        <GetRequestList users={users}/>
      </div>
      {isLoading && 
      <div className='flex items-center flex-col pt-[50px] pb-[50px]'>
        <Loader/>
      </div> }
      {error && <h1 className='text-center'>Произошла ошибка ${error}</h1> }
      <div className={style.getrequest__btn}>
        <div className={(page)===totalPages ? 'hidden' : ''}>
          <div className='w-[120px]'>
            <MyButton onClick={e=>setPage(page+1)}>
                Show more
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetRequest
