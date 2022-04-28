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
              <div className="footer-phone-numbers footer-contacts__phone-numbers">
                {footer.phone_numbers.map((item, index) => (
                  <p key={index} className="footer-phone-numbers__number">{item}</p>
                ))}
              </div>
              <div className="footer-contacts-socials footer-contacts__socials">
                <p className="footer-contacts-socials__title">Follow us:</p>
                <ul className="socials footer-contacts-socials__list">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="copyright-section">
        <Copyright text={footer.copyright} />
      </section>
    </footer>
  )
}