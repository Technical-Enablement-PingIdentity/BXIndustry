import React from 'react';
import { Facebook, Twitter, Instagram } from '@Components/icons';
import { Copyright } from '@Components';
import settings from '../../settings.json';

const { footer } = settings;

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content container__col">
            <div className="footer-info-block footer-info__side">
              <ul className="socials footer-info-block__socials">
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--outlined icon-button--white">
                    <Facebook />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--outlined icon-button--white">
                    <Twitter />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--outlined icon-button--white">
                    <Instagram />
                  </span>
                </li>
              </ul>
              <div className='footer-copyright'>
                {footer.copyright}
              </div>
            </div>
            <div className="footer-content__menu">
              <ul className="footer-menu">
                {footer.navigation.links.map((item, index) => (
                  <li key={index} className="footer-menu__item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="footer-info footer-content__info">
              <div className="footer-info-block footer-info__side">
                <span className="footer-info-block__title" >{footer.phone_number}</span>
                <span className="footer-info-block__title">{footer.email}</span>
                <span className="footer-info-block__title">{footer.chat}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright-section">
        <Copyright />
      </section>
    </>
  )
}