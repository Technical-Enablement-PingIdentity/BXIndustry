import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, DVWidget } from '@Components';
import { SearchIcon, UserIcon } from '@Components/icons';
import { LocationIcon, DocumentIcon } from './components/icons';
import { REAL_ESTATE_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin } = settings;

export const RealEstateAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

  const handleDVButtonClick = (dvData) => {
    return () => {
      authRef.current.openDialog(dvData);
    }
  }

  return (
    <div className="real-estate">
      <header className="header-wrapper header-wrapper--admin">
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
                  <li className="header-nav__item">About</li>
                  <li className="header-nav__item">Objects</li>
                  <li className="header-nav__item">For buyers</li>
                  <li className="header-nav__item">News</li>
                  <li className="header-nav__item">Contacts</li>
                </ul>
              </nav>
              <div className="header-auth-actions header__actions">
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
                )}
                <div className="header-auth-actions__user-icon">
                  <UserIcon fill="#366880" />
                </div>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={REAL_ESTATE_URL} className="header-auth-actions__link">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {admin.dv_buttons?.length && 
        <div className="container">
          <div className="container__col admin__actions">
            {admin.dv_buttons.map((dvData, index) => 
              <button className="button" key={index} onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
            )}
          </div>
        </div>
      }
      <section className="objects-section">
        <div className="container">
          <div className="container__col">
            <div className="places-filter objects-section__header">
              <h1 className="places-filter__title">{admin.title}</h1>
              <form className="places-filter-form places-filter__form">
                <div className="places-input-wrappper places-filter-form__input-wrapper places-filter-form__input-wrapper--sm">
                  <input type="text" placeholder="Chicago" className="places-input-wrappper__input" />
                  <button type="button" className="places-input-wrappper__button">
                    <LocationIcon fill="#273039" />
                  </button>
                </div>
                <div className="places-input-wrappper places-filter-form__input-wrapper">
                  <input type="text" className="places-input-wrappper__input" placeholder="Type the name" />
                  <button type="submit" className="places-input-wrappper__button">
                    <SearchIcon fill="#273039" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="objects-list">
            {admin.objects_section.map(({ title, subtitle, description, button }, index) => (
              <div key={index} className="objects-list__item">
                <div className="estate-block">
                  <div className="estate-block__image-wrapper">
                    <img src={images.objects[index]} className="estate-block__image" alt="estate-1" />
                  </div>
                  <div className="estate-block__description-wrapper">
                    <p className="estate-block__description">{subtitle}</p>
                    <p className="estate-block__title">{title}</p>
                    {description.map((item, index) => (
                      <p key={index} className="estate-block__description">{item}</p>
                    ))}
                  </div>
                  <div className="estate-block__action-wrapper">
                    <button className="estate-block__action">{button}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="offers-section offers-section--admin">
        <div className="container">
          <div className="container__col">
            <div className="offers-section-header offers-section__header">
              <h3 className="offers-section-header__title">{admin.apartments_section.title}</h3>
            </div>
          </div>
          <div className="offers-list">
            {admin.apartments_section.items.map(({ title, description, price, location }, index) => (
              <div key={index} className="offers-list__item">
                <div className="offer-block offer-block--full_fill" style={{ backgroundImage: `url(${images.apartments[index]})` }}>
                  <div className="offer-description offer-block__head">
                    <div className="offer-description__side">
                      <p className="offer-description__category-name">{title}</p>
                      <p className="offer-description__title">{description}</p>
                      <p className="offer-description__title">{price}</p>
                    </div>
                    <div className="offer-description__side offer-description__side--location">
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
          <div className="container__col">
            <button className="offers-section__button button button--outlined">
              <DocumentIcon className="button__icon" />
              Download apartment catalog
            </button>
          </div>
        </div>
      </section>
      <section className="dv-widget-section">
        {!!admin.dv_widget && (
          <div className="container">
            <div className="container__col">
              <DVWidget companyKey={admin.dv_widget.company_key} policyKey={admin.dv_widget.policy_key}
                apiKey={admin.dv_widget.api_key} />
            </div>
          </div>
        )}
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </div>
  )
}