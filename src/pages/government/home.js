import React, { useRef } from 'react';
import classnames from 'classnames';
import settings from './settings.json';
import { Copyright, AuthDialog } from '@Components';
import { ExpandArrow, MapMark, SearchIcon, Facebook, Twitter, Instagram } from '@Components/icons';
import { ArrowRight, UserIcon } from './components/icons';
import { globalSettings } from '../../global-settings';

const { home_page, copyright } = settings;
const { header, banner, info_section, footer } = home_page;

export const GovernmentHome = ({ images }) => {
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
                  {header.navigation.links.items.map(({ text, sub_menu }, index) => (
                    <li key={index} className={classnames('header-nav-item', 'header-nav__item', {
                      'header-nav-item--sub_menu': sub_menu
                    })}>
                      {text}
                      {sub_menu && (
                        <ExpandArrow className="header-nav-item__arrow" />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="header-auth-actions header__actions">
                <button className="location-btn header-auth-actions__location">
                  <MapMark className="location-btn__mark" />
                  {header.location.text}
                  <ExpandArrow className="location-btn__arrow" />
                </button>
                <div className="header-auth-actions__actions-wrapper">
                  {sk_buttons.map((skData, index) => (
                    <button key={index} className="header-auth-actions__button button"
                      onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                  ))}
                </div>
                <div className="header-auth-actions__icon-wrapper header-auth-actions__icon-wrapper--auth_trigger">
                  <UserIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="container">
          <div className="container__col">
            <div className="banner__content">
              <div className="banner-content">
                <h1 className="banner-content__title">{banner.title}</h1>
                <p className="banner-content__description">{banner.description}</p>
                <div className="search-input-wrapper banner-content__input-wrapper">
                  <input type="text" className="search-input-wrapper__input"
                    placeholder="What kind of service are you looking for? " />
                  <button type="button" className="search-input-wrapper__btn">
                    <SearchIcon fill="#030200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-section">
        {info_section.items.map(({ title, description, button }, index) => (
          <div key={index} className="info-block info-section__item">
            <p className="info-block__title">{title}</p>
            <p className="info-block__description">{description}</p>
            <div className="info-block__btn-wrapper">
              <button className="arrow-btn">
                {button}
                <ArrowRight className="arrow-btn__arrow" />
              </button>
            </div>
          </div>
        ))}
      </section>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="container__col">
            <div className="footer footer-wrapper__footer">
              <div className="footer__col">
                <div className="footer-nav">
                  {footer.navigation.map((item, index) => (
                    <div key={index} className="footer-nav-col footer-nav__col">
                      <p className="footer-nav-col__title">{item.title}</p>
                      <ul className="footer-nav-list">
                        {item.menu.map((menuItem, index) => (
                          <li key={index} className="footer-nav-list__item">
                            {menuItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="footer-contacts footer__col footer__col--contact_col">
                <p className="footer-contacts__title">Follow us:</p>
                <ul className="socials footer-contacts__socials">
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
                <div className="footer-phone-wrapper">
                  <button className="footer-phone-wrapper__button">
                    Online Support
                  </button>
                  <p className="footer-phone-wrapper__phone">{footer.phone_number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Copyright text={copyright.text} />
      </footer>
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}