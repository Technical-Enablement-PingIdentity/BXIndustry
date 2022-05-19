import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { UserIcon } from '@Components/icons';
import { ArrowIcon } from './components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const PharmacyHome = ({ images }) => {
  const authRef = useRef(null);

  let { dv_buttons } = settings;

  if (!dv_buttons || !dv_buttons.length) {
    dv_buttons = globalSettings.dv_buttons;
  }

  const handleDVButtonClick = (dvData) => {
    return () => {
      authRef.current.openDialog(dvData);
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
                  {dv_buttons.map((dvData, index) => (
                    <button key={index} className="header-auth-actions__button"
                      onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
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
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="banner__content">
          <div className="banner-content">
            <div className="container">
              <div className="container__col">
                <h1 className="banner-content__title">{home_page.banner.title}</h1>
                <p className="banner-content__sub-title">{home_page.banner.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-info-section">
        <div className="container">
          <div className="container__col">
            <div className="info-section-list home-info-section__list">
              {home_page.info_section.map(({ title, description, button }, index) => (
                <div key={index} className="home-info-block info-section-list__item">
                  <div className="home-info-block-content home-info-block__body">
                    <div className="home-info-block-content__icon-wrapper">
                      <img src={images.info_section[index]} alt="" />
                    </div>
                    <p className="home-info-block-content__title">{title}</p>
                    <p className="home-info-block-content__description">{description}</p>
                  </div>
                  <div className="home-info-block__footer">
                    <button className="home-info-block__button button button--outlined button--md">
                      {button}
                      <ArrowIcon className="button__icon" />
                    </button>
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