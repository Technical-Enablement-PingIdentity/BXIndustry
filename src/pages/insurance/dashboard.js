import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { UserIcon, SettingsIcon } from './components/icons';
import { Footer } from './components';
import { AuthDialog, DVWidget } from '@Components';
import { INSURANCE_URL } from '@Constants';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { header, dashboard } = settings;
const { title, title_button, portal, info_block } = dashboard;
let { dv_widget } = dashboard;

export const InsuranceDashboard = ({ images }) => {
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
              <button className="hamburger-menu header__menu-triger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <div className="header-auth-actions header__auth-actions">
                <button className="header-auth-actions__button header-auth-actions__button--filled 
                header-auth-actions__button--lg header-auth-actions__button--hidden_sm">
                  {header.additional_button_text}
                </button>
                {dashboard.user_name && (
                  <p className="header-auth-actions__user-name">{dashboard.user_name}</p>
                )}
                <button className="header-auth-actions__icon-wrapper">
                  <UserIcon />
                </button>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={INSURANCE_URL} className="header-auth-actions__link">log out</Link>
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
            </ul>
          </div>
        </div>
      </section>
      <main className="dashboard-content">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-title-wrapper dashboard-content__header">
              <h1 className="dashboard-title-wrapper__title">{title}</h1>
              <div className="dashboard-title-actions dashboard-title-wrapper__actions">
                {dashboard.dv_buttons?.length && dashboard.dv_buttons.map((dvData, index) =>
                  <button className="dashboard-title-actions__btn" key={index} onClick={handleDVButtonClick(dvData)}>
                    {dvData.text}
                  </button>
                )}
                {!dashboard.dv_buttons?.length &&
                  <button className="dashboard-title-actions__btn">
                    <SettingsIcon className="dashboard-title-actions__btn-icon" fill={title_button.style.color} />
                    {title_button.text}
                  </button>
                }
              </div>
            </div>
          </div>
          <section className="portal">
            {portal.map(({ title, description }, index) => (
              <div key={index} className="portal__item">
                <div className="portal-block">
                  <div className="portal-block__icon-wrapper">
                    <img src={images.portal[index]} alt="" />
                  </div>
                  <p className="portal-block__title">{title}</p>
                  <p className="portal-block__description">{description}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="dashboard-info-block-section">
            <div className="container__col">
              <div className="dashboard-info-block">
                <div className="dashboard-info-block-content dashboard-info-block__content-side">
                  <p className="dashboard-info-block-content__title">{info_block.title}</p>
                  <p className="dashboard-info-block-content__description">{info_block.description}</p>
                  <button type="button" className="button button--md">show details</button>
                </div>
                <div className="dashboard-info-block-image dashboard-info-block__image-side"
                  style={{ backgroundImage: `url(${images.info})` }}></div>
              </div>
            </div>
          </section>
        </div>
        {!!dv_widget && (
          <div className="container">
            <div className="container__col">
              <DVWidget companyKey={dv_widget.company_key} policyKey={dv_widget.policy_key}
                apiKey={dv_widget.api_key} />
            </div>
          </div>
        )}
      </main>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}