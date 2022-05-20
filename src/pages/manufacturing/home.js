import React, { Fragment, useRef } from 'react';
import settings from './settings.json';
import { AuthDialog } from '@Components';
import { Footer } from './components';
import { UserIcon } from './components/icons';
import { SearchIcon } from '@Components/icons';
import { globalSettings } from '../../global-settings';

const { home_page } = settings;
const { header, banner, services } = home_page;

export const ManufacturingHome = ({ images }) => {
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
              <div className="logo-wrapper header__logo-wrapper">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <div className="header__auth-actions">
                <div className="header-auth-actions">
                  <div className="header-auth-actions__actions-wrapper">
                    {dv_buttons.map((dvData, index) => (
                      <Fragment key={index}>
                        <span className="header-auth-actions__separator"></span>
                        <button className="header-auth-actions__info header-auth-actions__info--action"
                          onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                      </Fragment>
                    ))}
                  </div>
                  <UserIcon className="header-auth-actions__user-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="navigation-wrapper">
        <div className="container">
          <div className="container__col">
            <ul className="navigation">
              {header.navigation.links.items.map((item, index) => (
                <li key={index} className="navigation__item">
                  <span className="navigation-item-link">
                    {item}
                  </span>
                </li>
              ))}
              <li className="navigation__item">
                <span className="navigation-item-link">
                  <SearchIcon className="navigation-item-link__icon" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="banner__content-wrapper">
          <div className="container">
            <div className="container__col">
              <div className="banner__content">
                <div className="banner-content">
                  <h1 className="banner-content__title">
                    {banner.title.text}
                  </h1>
                  <p className="banner-content__description">
                    {banner.description.text}
                  </p>
                  <button className="banner-content__button button button--secondary">
                    {banner.button.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="container__col">
            <h3 className="services-section__title">{services.title}</h3>
            <div className="services-list">
              {services.services_blocks.items.map(({ title, description, button }, index) => (
                <div key={index} className="service-item-wrapper services-list__item">
                  <div className="service-block service-item-wrapper__item">
                    <div className="service-block__body">
                      <p className="service-block__title">{title}</p>
                      <p className="service-block__description">{description}</p>
                    </div>
                    <button className="service-block__button">{button}</button>
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