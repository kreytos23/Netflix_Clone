import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


export default function Footer() {
    return (
        <div>

            <div className="footer__social">
                <FacebookIcon className='footer__social__icons' style={{ fontSize: 40 }}/>
                <InstagramIcon className='footer__social__icons' style={{ fontSize: 40 }}/>
                <TwitterIcon className='footer__social__icons' style={{ fontSize: 40 }}/>
                <YouTubeIcon className='footer__social__icons' style={{ fontSize: 40 }}/>
            </div>

            <div className="footer__options">
                <div className="menu">
                    <a href="#" className="menu__options"> Audio and Subtitles </a>
                    <a href="#" className="menu__options"> Zona de Prensa </a>
                    <a href="#" className="menu__options"> Privacidad </a>
                    <a href="#" className="menu__options"> Contáctanos </a>
                </div>

                <div className="menu">
                    <a href="#" className="menu__options"> Descripción de Audio </a>
                    <a href="#" className="menu__options"> Inversores </a>
                    <a href="#" className="menu__options"> Articulos Legales </a>
                </div>

                <div className="menu">
                    <a href="#" className="menu__options"> Centro de Ayuda </a>
                    <a href="#" className="menu__options"> Empleo </a>
                    <a href="#" className="menu__options"> Preferencia de Cookies </a>
                </div>

                <div className="menu">
                    <a href="#" className="menu__options"> Tarjeta de Regalo</a>
                    <a href="#" className="menu__options"> Zona de Prensa </a>
                    <a href="#" className="menu__options"> Términos de Uso </a>
                    <a href="#" className="menu__options"> Información Corporativa</a>
                </div>
            </div>
        </div>
    )
}
