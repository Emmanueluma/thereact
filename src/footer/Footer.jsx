import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai' 
import {BiLogoPatreon} from 'react-icons/bi' 
import {Link} from 'react-router-dom'


const Footer = ({show}) => {
  return (
    <footer className='container'>
        {show && <div className='item one'>
            <Link to='/about' className='contact'>contact us</Link>
            <a href="https://www.instagram.com/thecritics001/" target="_blank" rel="noopener noreferrer">hi@thecritics001</a>
        </div>}
        <div className='item two'>
            <div>
                <a href="http://facebook.com/Thecriticswhorule" target="_blank" rel="noopener noreferrer">
                  <BiLogoFacebook />
                </a>
                <a href="https://www.instagram.com/thecritics001/" target="_blank" rel="noopener noreferrer">
                  <AiOutlineInstagram />
                </a>
                <a href="https://twitter.com/thecritics001" target="_blank" rel="noopener noreferrer">
                  <AiOutlineTwitter />
                </a>
                <a href="https://www.patreon.com/thecritics001" target="_blank" rel="noopener noreferrer">
                  <BiLogoPatreon />
                </a>
            </div>
        <p><em>website by Joshua Adeboye / <a href="http://webrug.pages.dev" target="_blank" rel="noopener noreferrer">emmanuel uma</a></em></p>
        </div>
    </footer>
  )
}

export default Footer
