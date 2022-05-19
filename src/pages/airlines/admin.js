import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon, BorderedAircraftIcon, CalendarIcon, TimeIcon } from './components/icons';
import { AIRLINES_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin, header } = settings;

export const AirlinesAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

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
                  <ul className="header-nav">
                    {header.links.items.map((item, index) => (
                      <li key={index} className="header-nav__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </ul>
              </nav>
              <div className="header__actions">
                <div className="header-auth-actions">
                  {admin.user_name && (
                    <p className="header-auth-actions__user-name">{admin.user_name}</p>
                  )}
                  <div className="icon-button icon-button--xs header-auth-actions__user-icon">
                    <UserIcon />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    <Link to={AIRLINES_URL} className="header-auth-actions__link">Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="admin-navigation-section">
        <div className="container">
          <div className="container__col">
            <div className="admin-user-info">
              <div className="user-info admin-user-info__side">
                <p className="user-info__text">{admin.subtitle}</p>
                <p className="user-info__title">{admin.title}</p>
              </div>
              <div className="admin-user-info__side user-actions">
                {admin.dv_buttons?.length &&
                  <div className="admin-user-buttons">
                    {admin.dv_buttons.map((dvData, index) => 
                      <button className="button" key={index}
                        onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>)}
                  </div>
                }
                {(!admin.dv_buttons?.length) && 
                  <div className="user-info-label">
                    <div className="user-info-label__side">
                      <BorderedAircraftIcon className="user-info-label__icon" />
                    </div>
                    <div className="user-info-label__side">
                      <p className="user-info-label__text">Your Miles:</p>
                      <p className="user-info-label__text user-info-label__text--md">3458</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="admin-navigation-wrapper">
          <div className="container admin-navigation-wrapper__content">
            <div className="container__col">
              <ul className="admin-navigation">
                <li className="admin-navigation__item admin-navigation__item--active">My Account</li>
                <li className="admin-navigation__item">Timetable</li>
                <li className="admin-navigation__item">Personal Offers</li>
                <li className="admin-navigation__item">Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="admin-dashboard-section">
        <div className="container">
          <div className="container__col">
            <div className="admin-dashboard">
              <div className="admin-dashboard__main-info">
                <div className="flights-list-section admin-dashboard__flights-list">
                  <p className="flights-list-section__head">
                    Flights you can check in for
                  </p>
                  <ul className="flights-list flights-list-section__body">
                    <li className="flights-list-item flights-list__item">
                      <div className="flights-list-item-info flights-list-item__side">
                        <p className="flights-list-item-info__title">FG4567 New-York — London</p>
                        <div className="flight-date-info">
                          <div className="flight-date-info__item">
                            <CalendarIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">13.12.2021</p>
                          </div>
                          <div className="flight-date-info__item">
                            <TimeIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">15:25</p>
                          </div>
                        </div>
                      </div>
                      <div className="flights-list-item__side">
                        <button className="button flights-list-item__button">Check In</button>
                      </div>
                    </li>
                    <li className="flights-list-item flights-list__item">
                      <div className="flights-list-item-info flights-list-item__side">
                        <p className="flights-list-item-info__title">DF2398  London — Berlin</p>
                        <div className="flight-date-info">
                          <div className="flight-date-info__item">
                            <CalendarIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">14.12.2021 </p>
                          </div>
                          <div className="flight-date-info__item">
                            <TimeIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">01:15</p>
                          </div>
                        </div>
                      </div>
                      <div className="flights-list-item__side">
                        <button className="button flights-list-item__button">Check In</button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flights-list-section admin-dashboard__flights-list">
                  <p className="flights-list-section__head">All flights</p>
                  <ul className="flights-list flights-list-section__body">
                    <li className="flights-list__item">
                      <div className="flights-list-item-info">
                        <p className="flights-list-item-info__title">MK5677 Berlin — New-York</p>
                        <div className="flight-date-info">
                          <div className="flight-date-info__item">
                            <CalendarIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">22.12.2021</p>
                          </div>
                          <div className="flight-date-info__item">
                            <TimeIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">15:25</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flights-list__item">
                      <div className="flights-list-item-info">
                        <p className="flights-list-item-info__title">DS5233 New-York — Seattle</p>
                        <div className="flight-date-info">
                          <div className="flight-date-info__item">
                            <CalendarIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">22.01.2022</p>
                          </div>
                          <div className="flight-date-info__item">
                            <TimeIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">13:10</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flights-list__item">
                      <div className="flights-list-item-info">
                        <p className="flights-list-item-info__title">DS5233 Seattle — New York</p>
                        <div className="flight-date-info">
                          <div className="flight-date-info__item">
                            <CalendarIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">25.01.2022</p>
                          </div>
                          <div className="flight-date-info__item">
                            <TimeIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">18:00</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flights-list__item">
                      <div className="flights-list-item-info">
                        <p className="flights-list-item-info__title">FG4567 New-York — London</p>
                        <div className="flight-date-info">
                          <div className="flight-date-info__item">
                            <CalendarIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">26.01.2022</p>
                          </div>
                          <div className="flight-date-info__item">
                            <TimeIcon className="flight-date-info__item-icon" />
                            <p className="flight-date-info__item-text">17:20</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="admin-dashboard__offers-side">
                <div className="admin-offers-section">
                  <h3 className="admin-offers-section__title">{admin.sidebar.title}</h3>
                  <div className="offers-list offers-list--admin_page">
                    {admin.sidebar.items.map(({ title, price, button_text }, index) => (
                      <div key={index} className="offers-list__item">
                        <div className="offer-block" style={{ backgroundImage: `url(${images.sidebar[index]})` }}>
                          <div className="offer-block__content">
                            <p className="offer-block__title">{title}</p>
                            <p className="offer-block__price">{price}</p>
                            <button className="offer-block__button">{button_text}</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {admin.dv_widget && (
        <div className="container">
          <div className="container__col">
            <DVWidget companyKey={admin.dv_widget.company_key} policyKey={admin.dv_widget.policy_key}
              apiKey={admin.dv_widget.api_key} />
          </div>
        </div>
      )}
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}