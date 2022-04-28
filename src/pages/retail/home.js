import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { MapMark, UserIcon } from '@Components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';
import { CartIcon } from './components/icons';

const { header, home_page } = settings;

export const RetailHome = ({ images }) => {
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
      <div className="header-wrapper">
        <div className="container">
          <div className="container__col">
            <header className="header">
              <button className="hamburger-menu header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper header__logo">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <div className="header__actions">
                <div className="header-auth-actions">
                  <div className="header-auth-actions__icon">
                    <MapMark />
                    <CartIcon className="cart-icon" />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    {sk_buttons.map((skData, index) => (
                      <button key={index} className="header-auth-actions__button"
                        onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                    ))}
                  </div>
                  <div className="header-auth-actions__circle-icon header-auth-actions__circle-icon--home_page">
                    <UserIcon fill="#0E264C" />
                  </div>
                </div>
              </div>
            </header>
            <nav className="header__navigation">
              <ul className="header-nav">
                {header.links.items.map((item, index) => (
                  <li key={index} className="header-nav__item">
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="bx-jumbotron">
        <div className="container">
          <div className="container__col bx-jumbotron__wrapper">
            <div className="bx-jumbotron__left" style={{ backgroundImage: `url(${images.jumbotron.left}`}}>
              <h2 className="bx-jumbotron__title">{home_page.jumbotron.left.title}</h2>
              <p className="bx-jumbotron__description">{home_page.jumbotron.left.description}</p>
              <button className="button">{home_page.jumbotron.left.button}</button>
            </div>
            <div className="bx-jumbotron__right" style={{ backgroundImage: `url(${images.jumbotron.right}`}}>
              <div className="bx-jumbotron__fancy">
                <h2 className="bx-jumbotron__title">{home_page.jumbotron.right.title}</h2>
                <h3 className="bx-jumbotron__subtitle">{home_page.jumbotron.right.subtitle}</h3>
                <p className="bx-jumbotron__description">{home_page.jumbotron.right.description}</p>
                <button className="button">{home_page.jumbotron.right.button}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="container">
          <div className="container__col banner__content">
            <div className="banner__text">{home_page.banner.text}</div>
            <div className="banner__logos">
              {images.banner.logos.map((logo, index) => (
                <img key={index} src={logo} alt="" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <div className="container__col">
            <div className="features-list">
              {home_page.features_section.items.map(({ title, description, link }, index) => (
                <div key={index} className="features-list__item">
                  <div className="features-info-block">
                    <img className="features-info-block__image" src={images.features[index]} alt={title} />
                    <h3 className="features-info-block__title">{title}</h3>
                    <p className="features-info-block__description">{description}</p>
                    <span className='features-info-block__link retail-link'>{link}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}