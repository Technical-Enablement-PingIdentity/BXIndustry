import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { UserIcon } from '@Components/icons';
import { NotificationIcon } from './components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const EducationHome = ({ images }) => {
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
              <div className="header__actions">
                <div className="header-auth-actions">
                  <div className="header-auth-actions__icon">
                    <NotificationIcon />
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
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="container">
          <div className="container__col">
            <div className="banner-content">
              <div className="banner-content__side banner__side--image-wrapper">
                <div className="banner-image-wrapper">
                  <div className="banner-image banner-image-wrapper__image">
                    <div className="banner-image__bg" style={{ backgroundImage: `url(${images.banner})` }}></div>
                    <div className="banner-image__circle banner-image__circle--first"></div>
                    <div className="banner-image__circle banner-image__circle--second"></div>
                    <div className="banner-image__circle banner-image__circle--third"></div>
                  </div>
                </div>
              </div>
              <div className="banner-info banner-content__side banner-content__side--info">
                <h1 className="banner-info__title">{home_page.banner.title}</h1>
                <p className="banner-info__description">{home_page.banner.subtitle}</p>
                <button className="banner-info__button button">{home_page.banner.button}</button>
              </div>
              <div className="banner-content__circle"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="programs-section">
        <div className="container">
          <div className="container__col">
            <h3 className="programs-section__title">{home_page.programs_section.title}</h3>
          </div>
          <div className="programs-list">
            {home_page.programs_section.items.map(({ title }, index) => (
              <div key={index} className="programs-list__item">
                <div className="image-info-block" style={{ backgroundImage: `url(${images.programs[index]})` }}>
                  <p className="image-info-block__name">{title}</p>
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