import React from 'react';
import { Facebook, Twitter, Instagram } from '@Components/icons';
import { Copyright } from '@Components';
import settings from '../../settings.json';

const { footer } = settings;

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
              <button className="footer-contacts__button">Online support</button>
              <ul className="socials footer-contacts__socials-list">
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--primary">
                    <Facebook />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--primary">
                    <Twitter />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--primary">
                    <Instagram />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="copyright-secton">
        <Copyright text={footer.copyright.text} />
      </section>
    </footer>
  )
}