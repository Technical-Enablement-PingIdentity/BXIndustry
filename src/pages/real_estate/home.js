import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { UserIcon } from '@Components/icons';
import { LocationIcon } from './components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const RealEstateHome = ({ images }) => {
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
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <header className="header-wrapper banner__header">
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
                    {sk_buttons.map((skData, index) => (
                      <button key={index} className="header-auth-actions__button"
                        onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                    ))}
                  </div>
                  <div className="header-auth-actions__user-icon header-auth-actions__user-icon--home_page">
                    <UserIcon fill="#366880" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="banner__content">
          <div className="container">
            <div className="container__col">
              <div className="banner-content">
                <div className="banner-content__title">{home_page.banner.title}</div>
                <div className="banner-info">
                  {home_page.banner.banner_information.blocks.map((item, index) => (
                    <div key={index} className="banner-info-block banner-info__block">
                      <div className="banner-info-block__value">{item.value}</div>
                      <p className="banner-info-block__description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers-section">
        <div className="container">
          <div className="container__col">
            <div className="offers-section-header offers-section__header">
              <h3 className="offers-section-header__title">{home_page.objects_section.title}</h3>
              <button className="button offers-section-header__button button--md">Show all</button>
            </div>
          </div>
          <div className="offers-list">
            {home_page.objects_section.items.map(({ title, name, location }, index) => (
              <div key={index} className="offers-list__item">
                <div className="offer-block" style={{ backgroundImage: `url(${images.objects[index]})` }}>
                  <div className="offer-description offer-block__head">
                    <div className="offer-description__side">
                      <p className="offer-description__category-name">{title}</p>
                      <p className="offer-description__title">{name}</p>
                    </div>
                    <div className="offer-description__side">
                      <p className="offer-description__location">
                        {location}
                        <LocationIcon className="offer-description__location-icon" />
                      </p>
                    </div>
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