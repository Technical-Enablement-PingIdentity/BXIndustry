import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon, InfoIcon } from './components/icons';
import { NON_PROFIT_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { header, dashboard } = settings;

export const NonProfitDashboard = ({ images }) => {
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
                    <li key={index} className="header-nav__item">{item}</li>
                  ))}
                </ul>
              </nav>
              <div className="header-auth-actions header__actions">
                {dashboard.user_name && (
                  <p className="header-auth-actions__user-name">{dashboard.user_name}</p>
                )}
                <div className="icon-button icon-button--xs header-auth-actions__user-icon">
                  <UserIcon />
                </div>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={NON_PROFIT_URL} className="header-auth-actions__link">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="portal">
        <div className="container">
          <div className="container__col">
            <div className="portal__header">
              <h1 className="portal__title">{dashboard.title}</h1>
              {dashboard.dv_buttons?.length &&
                <div className="portal__actions">
                  {dashboard.dv_buttons.map((dvData, index) => 
                    <button className="button" key={index} onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                  )}
                </div>
              }
            </div>
          </div>
          <div className="portal-info">
            {dashboard.portal.map(({ title, description }, index) => (
              <div key={index} className="portal-info__item">
                <div className="portal-info-item">
                  <div className="portal-info-item__icon-wrapper">
                    <img src={images.portal[index]} alt="" />
                  </div>
                  <p className="portal-info-item__title">{title}</p>
                  <p className="portal-info-item__description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="dashboard-main-info-section">
        <div className="container">
          <div className="dashboard-main-info">
            <div className="dashboard-articles dashboard-main-info__articles-side">
              {dashboard.articles.map(({ title }, index) => (
                <div key={index} className="dashboard-articles__item">
                  <div className="dashboard-article" style={{ backgroundImage: `url(${images.articles[index]})` }}>
                    <p className="dashboard-article__title dashboard-article__content">{title}</p>
                    <button type="button" className="dashboard-article__icon-wrapper dashboard-article__content">
                      <InfoIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="dashboard-main-info__side-bar">
              <form className="dashboard-form">
                <p className="dashboard-form__title">Quick Donation</p>
                <div className="dashboard-form__form-group-list">
                  <div className="form-group dashboard-form__form-group">
                    <label className="form-group__label" htmlFor="amount">Amont</label>
                    <input className="form-group__input" id="amount" type="text" placeholder="$5.00" />
                  </div>
                  <div className="form-group dashboard-form__form-group">
                    <label className="form-group__label" htmlFor="donation-type">What do you want to donate to?</label>
                    <select className="form-group__input" id="donation-type" >
                      <option value="" hidden></option>
                      <option value="Stary Animals">Stary Animals</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="button button--md dashboard-form__button">DONATE</button>
                <div className="dashboard-form__link-wrapper">
                  <button className="dashboard-form__link" type="button">Set payment method</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {!!dashboard.dv_widget && (
          <div className="container">
            <div className="container__col">
              <DVWidget companyKey={dashboard.dv_widget.company_key} policyKey={dashboard.dv_widget.policy_key}
                apiKey={dashboard.dv_widget.api_key} />
            </div>
          </div>
        )}
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}