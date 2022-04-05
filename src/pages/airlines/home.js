import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { SearchIcon } from '@Components/icons';
import { ArrowIcon, UserIcon } from './components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const AirlinesHome = ({ images }) => {
  const authRef = useRef(null);

  let { sk_buttons } = settings;

  if (!sk_buttons || !sk_buttons.length) {
    sk_buttons = globalSettings.sk_buttons;
  }

  const handleSKButtonClick = (skData) => {
    return () => {
      console.log(skData);
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
              <div className="header__actions">
                <div className="header-auth-actions">
                  <div>
                    <SearchIcon fill="#030200" className="header-auth-actions__search-icon" />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    {sk_buttons.map((skData, index) => (
                      <button key={index} className="header-auth-actions__button"
                        onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                    ))}
                  </div>
                  <div className="icon-button icon-button--xs header-auth-actions__user-icon header-auth-actions__user-icon--hidden_md">
                    <UserIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="container">
          <div className="banner-content banner__content container__col">
            <div className="banner-content__head">
              <h1 className="banner-content__title">{home_page.banner.title.text}</h1>
              <p className="banner-content__sub-title">{home_page.banner.subtitle.text}</p>
            </div>
            <div className="banner-content__footer">
              <div className="banner-form">
                <div className="banner-input-wrapper banner-form__input">
                  <label className="banner-input-wrapper__label">From</label>
                  <input type="text" placeholder="Departure" className="banner-input-wrapper__input" />
                </div>
                <div className="banner-input-wrapper banner-form__input">
                  <label className="banner-input-wrapper__label">To</label>
                  <input type="text" placeholder="Destination" className="banner-input-wrapper__input" />
                </div>
                <div className="banner-input-wrapper banner-form__input">
                  <label className="banner-input-wrapper__label">Dates</label>
                  <input type="text" placeholder="Choose the date" className="banner-input-wrapper__input" />
                </div>
                <div className="banner-form__button">
                  <span>{home_page.banner.button.text}</span>
                  <ArrowIcon fill="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page-categories">
        {home_page.categories_section.items.map(({ text }, index) => (
          <div key={index} className="home-page-categories__item">
            <img src={images.categories[index]} className="home-page-categories__icon" alt="" />
            {text}
          </div>
        ))}
      </section>
      <section className="offers-section">
        <div className="container">
          <div className="container__col">
            <h3 className="offers-section__title">{home_page.offers_section.title}</h3>
          </div>
          <div className="offers-list">
            {home_page.offers_section.items.map(({ title, price, button_text }, index) => (
              <div key={index} className="offers-list__item">
                <div className="offer-block" style={{ backgroundImage: `url(${images.offers[index]})` }}>
                  <div className="offer-block__content">
                    <p className="offer-block__title">{title}</p>
                    <p className="offer-block__price">{price}</p>
                    <button className="offer-block__button">{button_text}</button>
                  </div>
                </div>
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