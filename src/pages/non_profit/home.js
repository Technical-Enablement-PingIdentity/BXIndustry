import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { Footer } from './components';
import { UserIcon } from './components/icons';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const NonProfitHome = ({ images }) => {
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
                    <li key={index} className="header-nav__item">{item}</li>
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
                <div className="icon-button icon-button--xs header-auth-actions__user-icon 
                 header-auth-actions__user-icon--home_page">
                  <UserIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="container banner__content">
          <div className="container__col">
            <div className="banner-content">
              <p className="banner-content__description">{home_page.banner.subtitle}</p>
              <h1 className="banner-content__title">{home_page.banner.title}</h1>
              <button className="button button--md banner-content__button">{home_page.banner.button}</button>
            </div>
          </div>
        </div>
        <div className="banner__left-image" style={{ backgroundImage: `url(${images.left_image})` }}></div>
        <div className="banner__right-image" style={{ backgroundImage: `url(${images.right_image})` }}></div>
      </section>
      <section className="banner-image" style={{ backgroundImage: `url(${images.banner})` }}></section>
      <section className="charity-categories">
        <div className="container">
          <div className="container__col">
            <h3 className="charity-categories__title">{home_page.charity_categories.title}</h3>
          </div>
          <div className="charity-categories-list">
            {home_page.charity_categories.items.map(({ title, description, button }, index) => (
              <div key={index} className="charity-categories-list__item">
                <div className="category-block">
                  <div className="category-block-header category-block__header">
                    <p className="category-block-header__title">{title}</p>
                    <p className="category-block-header__description">{description}</p>
                    <button className="category-block-header__button">{button}</button>
                  </div>
                  <div className="category-block__footer" style={{
                    backgroundImage: `url(${images.charity_categories[index]})`
                  }}></div>
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