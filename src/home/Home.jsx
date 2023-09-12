import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import backGround from '../asset/bg2.jpg'
import Aboutfield from '../component/Aboutfield'
import ig1 from '../asset/ig1.jpg'
import ig2 from '../asset/ig2.jpg'
import ig3 from '../asset/ig3.jpg'
import ig4 from '../asset/ig4.jpg'
import you2 from '../asset/you2.jpg'
import you3 from '../asset/you3.jpg'
import you4 from '../asset/you4.jpg'
import Footer from '../footer/Footer'
import {BsYoutube} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Home = () => {
  const data = [
    {
      id: 1,
      img: ig1,
      href: 'https://www.instagram.com/p/ClZKsk1joTf/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA=='
    },
    {
      id: 2,
      img: ig2,
      href: 'https://www.instagram.com/p/Ci5HBA9DHXT/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },{
      id: 3,
      img: ig3,
      href: 'https://www.instagram.com/p/CZe14Z-jX2G/?utm_source=ig_web_copy_link'
    },{
      id: 4,
      img: ig4,
      href: 'https://www.instagram.com/p/Ci2LEt6DKOn/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    }
  ]
  const data1 = [
    {
      id: 1,
      img: ig2,
      href: 'https://youtu.be/kpxXmK4TC04?si=qFK_SASoW1L1TR3p'
    },
    {
      id: 2,
      img: you2,
      href: 'https://youtu.be/fzyGP1Walg4?si=cBU9lSJrR8-QiYgg'
    },{
      id: 3,
      img: you3,
      href: 'https://youtu.be/NpYMmJoET5M?si=TybwCwRshszWB0OC'
    },{
      id: 4,
      img: you4,
      href: 'https://youtu.be/Z4dfVgFsjQc?si=2Ir7nzxf8z9Uctbt'
    }
  ]
  return (
    <section className='landing--page container'>
      <Nav />
      <header>
        <img src={backGround} alt="" />
      </header>
      <Aboutfield title='who are the critics' show={true} />
      <section class="instagram">
            <h2 className='subt'>the critics instagram</h2>
            <div class="grid-container">
              {
                data.map(item => {
                  return(
                    <article key={item.id}>
                    <img src={item.img} alt={item.href} />
                    <div className="hover">
                      <a href={item.href}>follow@thecritics001 <AiOutlineInstagram className='logo' /></a>
                    </div>
                  </article>
                  )
                })
              }
            </div>
            <a className='btn--link' href="https://www.instagram.com/thecritics001/" target="_blank" rel="noopener noreferrer">follow@thecritics001 <AiOutlineInstagram className='logo' /></a>
      </section>
      <section class="instagram">
            <h2 className='subt'>our Youtube channel</h2>
            <div class="grid-container">
              {
                data1.map(item => {
                  return(
                    <article key={item.id}>
                    <img src={item.img} alt={item.href} />
                    <div className="hover">
                      <a href={item.href}>follow@thecritics001 <BsYoutube className='logo' /></a>
                    </div>
                  </article>
                  )
                })
              }
            </div>
            <a className='btn--link' href="https://www.youtube.com/@thecritics001" target="_blank" rel="noopener noreferrer">follow@thecritics001 <BsYoutube className='logo' /></a>
      </section>
      <Footer show={true} />
    </section>
  )
}

export default Home
