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
            <div className="footer-content__menu">
              <ul className="footer-menu">
                {footer.navigation.links.map((item, index) => (
                  <li key={index} className="footer-menu__item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="footer-socials footer-content__info">
              <ul className="socials footer-socials__list">
                <li className="socials__item">
                  <span className="footer-social-icon icon-button">
                    <Facebook />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button">
                    <Twitter />
                  </span>
                </li>
                <li className="socials__item">
                  <span className="footer-social-icon icon-button">
                    <Instagram />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright-secton">
        <Copyright text={footer.copyright} />
      </section>
    </>
  )
}