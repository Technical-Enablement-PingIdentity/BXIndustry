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
          <div className="container__col">
            <ul className="footer-menu">
              {footer.navigation.links.map((item, index) => (
                <li key={index} className="footer-menu__item" >{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer-contacts">
            <div className="footer-contacts__col">
              <p className="footer-contacts__tel">{footer.phone_number}</p>
              <button className="button footer-contacts__button">Online support</button>
            </div>
            <div className="footer-socials footer-contacts__col">
              <p className="footer-socials__title">Follow us:</p>
              <ul className="socials footer-socials__list">
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--outlined icon-button--primary">
                    <Facebook fill="#C83E7D" />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--outlined icon-button--primary">
                    <Twitter fill="#C83E7D" />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button icon-button--outlined icon-button--primary">
                    <Instagram fill="#C83E7D" />
                  </span>
                </li>
              </ul>
            </div>
            <section className="copyright-section footer-contacts__copyright">
              <Copyright text={footer.copyright} />
            </section>
          </div>
        </div>
      </footer>
    </>
  )
}