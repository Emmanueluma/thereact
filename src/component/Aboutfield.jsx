import React from 'react'
import aboutPic from '../asset/about.webp'
import {Link} from 'react-router-dom'
import './aboutfield.css'

const Aboutfield = ({title, show}) => {
  return (
    <section class="about">
            <h2 className='subt'>{title}</h2>
            <div class="flex-container">
                <div class="flex-item one ">
                    <p align="justify">
                        the critics company is a filmmaking collective based in Kaduna, 
                        Nigeria popularly known for making sci-fi films with mobile phones, 
                        since being founded in 2015, we have been driven by the desire to create 
                        magical experiences through film for ourselves and our community as a whole,
                        this is the core of every production translating time, 
                        experiences, thoughts and feelings using art as a medium.
                    </p>
                    <p align="justify">
                        our work has been able to cross borders through different means, ranging 
                        from features on internationally recognized platforms like BBC, Reuters, 
                        Al-Jazeera, Indie Film Festival, The art of protest by gestalten, to 
                        collaborations with top brands and great minds in the likes of Kaspersky, 
                        Jacobjonasthecompany, Samsung, Dan Mace to acquiring titles and awards such 
                        as the first webby nomination from Nigeria, Our short films Z: The Beginning 
                        and Timothee winning best short film and best international short film at the 
                        African Smartphone International Film festival and Indie Film Fest respectively, 
                        After recently being selected as a part of the YouTube Black voices class of 22, 
                        we are understanding that the secret to success is in every drop of perseverance you inhabit.
                    </p>
                    <p align="justify">
                        we are constantly pushing the boundaries of what you can achieve when 
                        you put your mind to it, whether you have a professional camera, a BIG 
                        film crew, a smart phone, DIY equipment and a group of like minded individuals.
                    </p>
                    {show && <Link class="btn" to='/about' >read more</Link>}
                </div>
                <div class="flex-item two">
                    <img src={aboutPic} alt="aboutpic" />
                </div>
            </div>
      </section>
  )
}

export default Aboutfield
