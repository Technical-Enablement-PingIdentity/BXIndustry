import React from 'react';
import { Copyright } from '@Components';
import { Facebook, Twitter, Instagram } from '@Components/icons';
import settings from '../../settings.json';
const { footer } = settings;

export function Footer() {
  return (
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
          <div className="footer-info footer-content__info">
            <div className="footer-info-block footer-info__side">
              <span className="footer-info-block__title">
                {footer.phone_number}
              </span>
              <button className="footer-info-block__button">
                Online support
              </button>
            </div>
            <div className="footer-info-block footer-info__side">
              <span className="footer-info-block__title">Follow us:</span>
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
            </div>
          </div>
        </div>
      </div>
      <Copyright text={footer.copyright} />
    </footer>
  )
}