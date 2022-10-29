import React from 'react'
import MyButton from '../UI/MyButton/MyButton'
import './Intro.modle.sass'
import {Link} from 'react-scroll'

const Intro = () => {

  return (
    <section id='test' className ="intro">
      <div className="intro__container">
        <div className = "intro__body">
          <div class = "intro__titlle">Test assignment for front-end developer</div>
          <div className = "intro__text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
          <div className='w-[100px] m-auto'>
          <Link 
            to="post__request"
            smooth= {true}
            >
              <MyButton>Sign up</MyButton>
            </Link>
          </div>
        </div>  
      </div>
    </section>
  )
}
export default Intro
  