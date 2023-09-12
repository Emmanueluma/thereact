import React from 'react'
import './about.css'
import Nav from '../nav/Nav'
import backGround from '../asset/bg2.jpg'
import logo from '../asset/icon.png'
import Aboutfield from '../component/Aboutfield'
import img1 from '../asset/bio1.jpg'
import img2 from '../asset/bio2.jpg'
import img3 from '../asset/bio3.jpg'
import img4 from '../asset/bio4.jpg'
import img5 from '../asset/bio5.jpg'
import Footer from '../footer/Footer'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'




const About = () => {
  const data = [
    {
      id:1,
      image: img1,
      instagram: "https://www.instagram.com/richardyusuff/?hl=en",
      x: 'https://twitter.com/RichardYusuff',
      text: 'Richard Yusuff Is A Filmmaker, Writer, Script Supervisor, Photographer, VFX Artist, And Editor, Under The Umbrella Of The Filmmaking Collective - The Critics. What You Would Call A Multi Artist. He Has Starred As An Actor In Over Ten Short Films Produced By The Collective And Is A Content Creation Enthusiast. Richard Doubles As Cast And Crew In Various Productions And Has CreditsAs A VFX Artist In The Nigerian Netflix Series “King Of Boys - The ReturnOf The King”. In 2020, He Represented Nigeria At The African Teens Summit Alongside Other African Creators Like King Nahh, Dj Switch Ghana, Ellie ScotteAnd Megan Werner. Richard Is An Alumnus Of The YouTube Black Voices Creators Class Of 2022.'
    },
    {
      id:2,
      image: img2,
      instagram: "https://www.instagram.com/raymondyusuff_/?hl=en",
      x: 'https://twitter.com/raymondyusuff_',
      text: 'Raymond J. Yusuff Is A Filmmaker And Member Of The Collective Who Dons Many Hats In The Film Production Process. True To The Critics Form, Raymond Plays Many Roles In The Company As A VFX Artist, CG Generalist, Director, Writer, Cinematographer, Editor, Colorist, And Sound Editor With Credits On Short Films Produced By The Collective. Connect With Him And Especially Catch The Daily Vlog, A Series Of Mini-Documentaries Chronicling Their Everyday Activities.'
    },
    {
      id:3,
      image: img3,
      instagram: "https://www.instagram.com/ffrnld/?hl=en",
      x: '',
      text: `
      Ronald Yusuff is a Filmmaker, Producer, Camera Operator, and member of The Critics.
      He describes himself as an erudite cinephile whose novel approach balances filmmaking
      decisions within the company. He has manned the camera for numerous productions and
      doubles as an Editor and VFX artist in several projects.
      True to The Critics' diverse skill set, Ronald’s sharp and alluring facial features impress that
      the lens was made for him and as such, he has starred in films produced by the
      company and is quite the model.
      In 2019, he graced the cover of The Revue Magazine, an editorial project by The Kaduna
      Fashion and Art Exhibition. He spoke at the 2019 Dare Conference.
      Ronald enjoys driving and is most comfortable at Car Meets!
      Catch some highlights from these events and more if his work on
      `
    },
    {
      id:4,
      image: img4,
      instagram: "https://www.instagram.com/dahilo_chan/?hl=en",
      x: 'https://twitter.com/victordahilo',
      text: `
      Victor Josiah is a Filmmaker, VFX artist, Editor, Guitarist, and one of The Critics.
      He is a versatile thinker and incredibly analytical.
      In 2020, Victor worked on the set of the popular Nigerian Netflix Series; King of Boys: The
      Return of the King contributing to the glowing reviews
      He spoke at the 2019 Kaduna Book and Arts Festival (KABAFEST) and has shown creative
      ingenuity in several works done by the company.
       `
    },
    {
      id:5,
      image: img5,
      instagram: "https://www.instagram.com/godw3in/?hl=en",
      x: 'https://twitter.com/godw3in',
      text:  `
      Godwin Josiah is a Kaduna Based Filmmaker, Musical Artist, Director, and member of the
      Filmmaking collective - The Critics.
      A true universal artist, Godwin explores different forms of art to tell the stories that matter to
      him. He has spearheaded multiple film endeavors by the group and his artistic dreams are
      only getting bigger.
      In 2022, Godwin announced his entrance into the music industry with his debut musical
      project titled “Road to Nirvana”. This project confirms Godwin’s versatility as an artist and
      reveals his ability to bring stories to life even from a musical angle.
      His method of filmmaking invites the audience to explore the immersive capability within a
      story, pulling them in, and immersing them completely in that art form.
      `
    },
  ]
  return (
    <section className='main-about container'>
      <Nav />
      <header>
        <div className="bgi">
          <img src={backGround} alt="background" />
        </div>
        <div className="logo">
        <img className='logoimg' src={logo} alt="logo" />
        </div>
      </header>
      <Aboutfield title='about the critics company' />
      <section className="member">
        <h2 className='subt'>members of the collective</h2>
        <div className="grid-container">
          {
            data.map(item => {
              return(
                <div className="flex-container" key={item.id}>
                <div className='item img'>
                  <img src={item.image} alt={item.id} />
                </div>
                <div className='item text'>
                  <p>{item.text}</p>
                  <div className="link">
                    <a href={item.x}><AiOutlineTwitter /></a>
                    <a href={item.instagram}>< AiOutlineInstagram /></a>
                  </div>
                </div>
              </div>
              )
            })
          }
          
        </div>
      </section>
      <section className="contact" id='contact'>
        <h2 className='subt'>get in touch</h2>
        <div className="flex-contanier">
                <div className='flex--item'>
                    <div className="overlay"></div>
                    <iframe src="https://giphy.com/embed/l41lGnxllmN3YqOyI"></iframe>
                </div>
                <form className='flex--item'>
                    <h1>DROP US A MESSAGE</h1>
                    <div className='forminfo'>
                        <input type="text" placeholder="your name*" required />
                        <input type="email" placeholder="email address*" required />
                        <input type="text" placeholder="subject*" required />
                        <textarea name="message" id="message" placeholder="message*" required/>
                        <button  type="submit">send message</button>
                    </div>
                </form>
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default About
