import React, { Fragment, useRef } from 'react';
import { AuthDialog } from '@Components';
import { SearchIcon } from '@Components/icons';
import { UserIcon } from './components/icons';
import { Footer, VideoTile } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const CompanyHome = ({ images }) => {
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
                <SearchIcon fill="#ffffff" className="header-auth-actions__search-icon" />
                <div className="header-auth-actions__actions-wrapper">
                  {dv_buttons.map((dvData, index) => (
                    <Fragment key={index}>
                      <button className="header-auth-actions__button"
                        onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
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
        <div className="banner__image" style={{ backgroundImage: `url(${images.banner})` }}>
          <div className="banner-content">
            <div className="container">
              <div className="container__col">
                <div className="banner-content__head">
                  <h4 className="banner-content__super-title">{home_page.banner.supertitle}</h4>
                  <h1 className="banner-content__title">{home_page.banner.title}</h1>
                  <p className="banner-content__sub-title">{home_page.banner.subtitle}</p>
                  <button className="button button--md">{home_page.banner.button}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container__col">
            <div className="banner__video-tiles">
              {images.videoTiles.map((image, index) => (
                <VideoTile key={index} imageUrl={image} altText={`Video tile ${index}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="main-content">
        <div className="container">
          <div className="container__col">
            <div className="main-content__container">
              <div className="main-content__column">
                <h2 className="main-content__title">{home_page.main_content.title}</h2>
                <p className="main-content__description">{home_page.main_content.description}</p>
                <img src={images.mainContentImage} alt="Content" />
              </div>
              <div className="main-content__column">
                <ul className="bullets">
                  {home_page.main_content.bullets.items.map((bullet, index) => (
                    <li key={index} className="bullet">
                      <div className="bullet__index">{`0${index + 1}`}</div>
                      <div className="bullet__text">{bullet}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}