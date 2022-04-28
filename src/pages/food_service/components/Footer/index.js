import React from 'react';
import { Facebook, Twitter, Instagram } from '@Components/icons';
import { Copyright } from '@Components';
import settings from '../../settings.json';

const { footer, copyright } = settings;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container__col">
          <div className="footer-content">
            <ul className="footer-menu">
              {footer.navigation.links.map((item, index) => (
                <li key={index} className="footer-menu__item">{item}</li>
              ))}
            </ul>
            <div className="footer-contacts">
              <button className="footer-contacts__button">Online Support</button>
              <ul className="socials footer-contacts__socials-list">
                <li className="socials__item">
                  <span className="footer-social-btn">
                    <Facebook fill="#181818" />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-btn">
                    <Twitter fill="#181818" />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-btn">
                    <Instagram fill="#181818" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="copyright-section">
        <Copyright text={copyright.info.text} />
      </section>
    </footer>
  )
}