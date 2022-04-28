import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, SKWidget } from '@Components';
import { UserIcon, InfoIcon } from './components/icons';
import { NON_PROFIT_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { header, admin } = settings;

export const NonProfitAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

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
                    <li key={index} className="header-nav__item">{item}</li>
                  ))}
                </ul>
              </nav>
              <div className="header-auth-actions header__actions">
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
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
      <section className="dashboard">
        <div className="container">
          <div className="container__col">
            <div className="dashboard__header">
              <h1 className="dashboard__title">{admin.title}</h1>
              {admin.sk_buttons?.length &&
                <div className="dashboard__actions">
                  {admin.sk_buttons.map((skData, index) => 
                    <button className="button" key={index} onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                  )}
                </div>
              }
            </div>
          </div>
          <div className="dashboard-info">
            {admin.dashboard.map(({ title, description }, index) => (
              <div key={index} className="dashboard-info__item">
                <div className="dashboard-info-item">
                  <div className="dashboard-info-item__icon-wrapper">
                    <img src={images.dashboard[index]} alt="" />
                  </div>
                  <p className="dashboard-info-item__title">{title}</p>
                  <p className="dashboard-info-item__description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="admin-main-info-section">
        <div className="container">
          <div className="admin-main-info">
            <div className="admin-articles admin-main-info__articles-side">
              {admin.articles.map(({ title }, index) => (
                <div key={index} className="admin-articles__item">
                  <div className="admin-article" style={{ backgroundImage: `url(${images.articles[index]})` }}>
                    <p className="admin-article__title admin-article__content">{title}</p>
                    <button type="button" className="admin-article__icon-wrapper admin-article__content">
                      <InfoIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="admin-main-info__side-bar">
              <form className="admin-form">
                <p className="admin-form__title">Quick Donation</p>
                <div className="admin-form__form-group-list">
                  <div className="form-group admin-form__form-group">
                    <label className="form-group__label" htmlFor="amount">Amont</label>
                    <input className="form-group__input" id="amount" type="text" placeholder="$5.00" />
                  </div>
                  <div className="form-group admin-form__form-group">
                    <label className="form-group__label" htmlFor="donation-type">What do you want to donate to?</label>
                    <select className="form-group__input" id="donation-type" >
                      <option value="" hidden></option>
                      <option value="Stary Animals">Stary Animals</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="button button--md admin-form__button">DONATE</button>
                <div className="admin-form__link-wrapper">
                  <button className="admin-form__link" type="button">Set payment method</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {!!admin.sk_widget && (
          <div className="container">
            <div className="container__col">
              <SKWidget companyKey={admin.sk_widget.company_key} policyKey={admin.sk_widget.policy_key}
                apiKey={admin.sk_widget.api_key} />
            </div>
          </div>
        )}
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}