import React, { Fragment, useRef } from 'react';
import { AuthDialog } from '@Components';
import { UserIcon, CalendarIcon, KeyIcon } from './components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const HotelsHome = ({ images }) => {
  const authRef = useRef(null);

  let { sk_buttons } = settings;

  if (!sk_buttons || !sk_buttons.length) {
    sk_buttons = globalSettings.sk_buttons;
  }

  const handleSKButtonClick = (skData) => {
    return () => {
      authRef.current.openDialog(skData);
    }
  }

  return (
    <>
      <header className="header-wrapper">
        <div className="container">
          <div className="container__col">
            <div className="header">
              <button className="hamburger-menu header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper header__logo">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <nav className="header__navigation">
                <ul className="header-nav">
                  {header.links.items.map((item, index) => (
                    <li key={index} className="header-nav__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="header-auth-actions header__actions">
                <div className="header-auth-actions__actions-wrapper">
                  {sk_buttons.map((skData, index) => (
                    <Fragment key={index}>
                      <button className="header-auth-actions__button"
                        onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                      <div className="header-auth-actions__line"></div>
                    </Fragment>
                  ))}
                </div>
                <div className="header-auth-actions__user-icon header-auth-actions__user-icon--home_page">
                  <UserIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="banner__image" style={{ backgroundImage: `url(${images.banner})` }}></div>
        <div className="banner-content">
          <div className="container">
            <div className=" container__col">
              <div className="banner-content__head">
                <h1 className="banner-content__title">{home_page.banner.title.text}</h1>
                <p className="banner-content__sub-title">{home_page.banner.subtitle.text}</p>
              </div>
            </div>
            <div className="banner-content__footer">
              <div className="banner-form">
                <div className="banner-form__item">
                  <div className="banner-input-wrapper">
                    <label className="banner-input-wrapper__label">Check-In — Check-Out</label>
                    <div className="banner-input-icon-wrapper">
                      <input type="text" placeholder="Arrive — Depart" className="banner-input-wrapper__input" />
                      <CalendarIcon className="banner-input-icon-wrapper__icon" />
                    </div>
                  </div>
                </div>
                <div className="banner-form__item">
                  <div className="banner-input-wrapper">
                    <label className="banner-input-wrapper__label">Rooms</label>
                    <div className="banner-input-icon-wrapper">
                      <input type="text" placeholder="1 room" className="banner-input-wrapper__input" />
                      <KeyIcon className="banner-input-icon-wrapper__icon" />
                    </div>
                  </div>
                </div>
                <div className="banner-form__item">
                  <div className="banner-input-wrapper">
                    <label className="banner-input-wrapper__label">Guests</label>
                    <div className="banner-input-icon-wrapper">
                      <input type="text" placeholder="2 Adults" className="banner-input-wrapper__input" />
                      <UserIcon className="banner-input-icon-wrapper__icon" />
                    </div>
                  </div>
                </div>
                <div className="banner-form__item banner-form__item--button">
                  <div className="banner-form__button">{home_page.banner.button.text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers-section">
        <div className="container">
          <div className="container__col">
            <h3 className="offers-section__title">{home_page.offers_section.title}</h3>
          </div>
          <div className="offers-list">
            {home_page.offers_section.items.map(({ title }, index) => (
              <div key={index} className="offer-item offers-list__item">
                <div className="offer-item__image" style={{ backgroundImage: `url(${images.offers[index]})` }}></div>
                <p className="offer-item__name">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}