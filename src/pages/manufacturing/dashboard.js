import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { UserIcon } from './components/icons';
import { Footer } from './components';
import { AuthDialog, DVWidget } from '@Components';
import { MANUFACTURING_URL } from '@Constants';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard } = settings;
const { header, user_name, title, services, dv_widget } = dashboard;

export const ManufacturingDashboard = ({ images }) => {
  const authRef = useRef(null);
  consolidateDashboardSettings(dashboard);

  const handleDVButtonClick = (dvData) => {
    return () => {
      authRef.current.openDialog(dvData);
    }
  }

  return (
    <>
      <header className="dashboard-header-wrapper">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-header">
              <button className="hamburger-menu dashboard-header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper dashboard-header__logo-wrapper dashboard-header__side">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <ul className="dashboard-header-nav dashboard-header__nav">
                {header.navigation.links.items.map((link, index) => (
                  <li key={index} className="dashboard-header-nav__item">{link}</li>
                ))}
              </ul>
              <div className="dashboard-header__side">
                <div className="header-auth-actions">
                  {user_name && (
                    <p className="header-auth-actions__info">{user_name}</p>
                  )}
                  <div className="header-auth-actions__actions-wrapper">
                    <Link className="header-auth-actions__info header-auth-actions__info--action"
                      to={MANUFACTURING_URL}>log out</Link>
                  </div>
                  <UserIcon className="header-auth-actions__user-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="dashboard-content">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-title-wrapper dashboard-content__header">
              <h1 className="dashboard-title-wrapper__title">{title}</h1>
              <div className="dashboard-title-actions dashboard-title-wrapper__actions">
                {dashboard.dv_buttons?.length && dashboard.dv_buttons.map((dvData, index) =>
                  <button className="dashboard-title-actions__btn button button--outlined" key={index}
                    onClick={handleDVButtonClick(dvData)}>
                    {dvData.text}
                  </button>
                )}
                {!dashboard.dv_buttons?.length &&
                  <>
                    <button className="dashboard-title-actions__btn button button--outlined">
                      Factory information
                    </button>
                    <button className="dashboard-title-actions__btn button button--outlined">
                      INDUSTRY BENCHMARKS
                    </button>
                  </>
                }
              </div>
            </div>
            <div className="dashboard-services-list">
              {services.map(({ title, description, button }, index) => (
                <div key={index} className="dashboard-image-block dashboard-services-list__item">
                  <div className="dashboard-image-block__image" style={{
                    backgroundImage: `url(${images.services[index]})`
                  }}></div>
                  <div className="dashboard-image-block-content dashboard-image-block__content">
                    <p className="dashboard-image-block-content__title">{title}</p>
                    <p className="dashboard-image-block-content__text">{description}</p>
                    <button className="dashboard-image-block-content__button button button--secondary">
                      {button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {!!dv_widget && (
          <div className="container">
            <div className="container__col">
              <DVWidget companyKey={dv_widget.company_key} policyKey={dv_widget.policy_key}
                apiKey={dv_widget.api_key} />
            </div>
          </div>
        )}
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}