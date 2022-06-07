import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, DVWidget } from '@Components';
import {
  UserIcon, CalendarIcon, FoodIcon, PriceIcon, ErrorIcon, StarIcon
} from './components/icons';
import { HOTELS_URL } from '@Constants';
import { getDateInFuture } from '@Helpers';
import { Footer } from './components';
import settings from './settings.json';
import apartmentImg from './img/apartment.jpg';
import { consolidateDashboardSettings } from '@Helpers';


const { dashboard, header } = settings;

export const HotelsDashboard = ({ images }) => {
  const authRef = useRef(null);
  consolidateDashboardSettings(dashboard);

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
                {dashboard.user_name && (
                  <p className="header-auth-actions__user-name">{dashboard.user_name}</p>
                )}
                <div className="header-auth-actions__user-icon">
                  <UserIcon />
                </div>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={HOTELS_URL} className="header-auth-actions__button">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="dashboard-section">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-section__header">
              <h1 className="dashboard-section__title">{dashboard.title}</h1>
              {dashboard.dv_buttons?.length &&
                <div>
                  {dashboard.dv_buttons.map((dvData, index) => 
                    <button className="button" key={index}
                      onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                  )}
                </div>
              }
            </div>
          </div>
          <div className="dashboard-info">
            <div className="dashboard-info__side dashboard-info__side--main_info">
              <div className="user-tabs-wrapper">
                <ul className="user-tabs-head">
                  <li className="user-tabs-head__item user-tabs-head__item--active">
                    My Reservation
                  </li>
                  <li className="user-tabs-head__item ">
                    Activity
                  </li>
                  <li className="user-tabs-head__item ">
                    Settings
                  </li>
                </ul>
                <div className="user-tabs-body">
                  <div className="reservation-data user-tabs-body__item">
                    <div className="reservation-main-info reservation-data__main-info">
                      <div className="reservation-main-info__side">
                        <div className="apartment-info">
                          <div className="apartment-info__side apartment-info__side--image">
                            <div className="apartment-info__image" style={{ backgroundImage: `url(${apartmentImg})` }}></div>
                          </div>
                          <div className="apartment-info__side">
                            <p className="apartment-info__title">Deluxe Apartment</p>
                            <div className="apartment-description apartment-info__description">
                              <div className="apartment-description__icon">
                                <CalendarIcon />
                              </div>
                              <p className="apartment-description__text">{getDateInFuture(14, true)} - {getDateInFuture(21, true)}</p>
                            </div>
                            <div className="apartment-description apartment-info__description">
                              <div className="apartment-description__icon">
                                <UserIcon />
                              </div>
                              <p className="apartment-description__text">2 Adults</p>
                            </div>
                            <div className="apartment-description apartment-info__description">
                              <div className="apartment-description__icon">
                                <FoodIcon />
                              </div>
                              <p className="apartment-description__text">Breakfast and dinner included</p>
                            </div>
                            <div className="apartment-description apartment-info__description">
                              <div className="apartment-description__icon">
                                <PriceIcon />
                              </div>
                              <p className="apartment-description__text">$1493</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="reservation-main-info__side reservation-main-info__side--btn">
                        <button className="reservation-main-info__button button--outlined button button--md">
                          Details
                        </button>
                      </div>
                    </div>
                    <p className="reservation-alert">
                      <ErrorIcon className="reservation-alert__icon" />
                      You can cancel your reservation till {getDateInFuture(14, true)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-info__side dashboard-info__side--sidebar">
              <p className="dashboard-section__title dashboard-section__title--sm">{dashboard.title}</p>
              <div className="layalty-block dashboard-sidebar">
                <p className="layalty-block__title">{dashboard.sidebar.title}</p>
                <div className="layalty-card layalty-block__main-info">
                  <p className="layalty-card__description">Points You've Earned:</p>
                  <p className="layalty-card__title">3452</p>
                  <ul className="stars">
                    <li className="stars__item">
                      <StarIcon />
                    </li>
                    <li className="stars__item">
                      <StarIcon />
                    </li>
                    <li className="stars__item">
                      <StarIcon />
                    </li>
                    <li className="stars__item">
                      <StarIcon />
                    </li>
                    <li className="stars__item">
                      <StarIcon />
                    </li>
                  </ul>
                </div>
                <p className="layalty-block__link">More about loyalty program</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dashboard-offer-section" style={{ backgroundImage: `url(${images.offer})` }}>
        <div className="container dashboard-offer-section__content">
          <div className="container__col">
            <h5 className="dashboard-offer-section__title">{dashboard.offer_section.title}</h5>
            <button className="dashboard-offer-section__button">{dashboard.offer_section.button}</button>
          </div>
        </div>
      </section>
      {dashboard.dv_widget && (
        <div className="container">
          <div className="container__col">
            <DVWidget companyKey={dashboard.dv_widget.company_key} policyKey={dashboard.dv_widget.policy_key}
              apiKey={dashboard.dv_widget.api_key} />
          </div>
        </div>
      )}
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}