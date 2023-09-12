import React from 'react'
import './film.css'
import Nav from '../nav/Nav'
import img1 from '../asset/ig2.jpg'
import img2 from '../asset/you2.jpg'
import img3 from '../asset/you3.jpg'
import img4 from '../asset/you4.jpg'


const Film = () => {
  const data = [
    {
      id: 1,
      image:img1,
      href: 'https://youtu.be/kpxXmK4TC04?si=qFK_SASoW1L1TR3p'
    },
    {
      id: 2,
      image:img2,
      href: 'https://youtu.be/fzyGP1Walg4?si=cBU9lSJrR8-QiYgg'
    },
    {
      id: 3,
      image:img3,
      href: 'https://youtu.be/NpYMmJoET5M?si=TybwCwRshszWB0OC'
    },
    {
      id: 4,
      image:img4,
      href: 'https://youtu.be/Z4dfVgFsjQc?si=2Ir7nzxf8z9Uctbt'
    }
  ]
  return (
    <section className="film container">
      <Nav color={true} />
      <section className="grid--container">
        {
          data.map(item => {
            return(
              <article key={item.id}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.href} />
                </a>
              </article>
            )
          })
        }
      </section>
    </section>
  )
}

export default Film