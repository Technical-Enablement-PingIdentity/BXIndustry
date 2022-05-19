import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { UserIcon, SettingsIcon } from './components/icons';
import { Footer } from './components';
import { AuthDialog, DVWidget } from '@Components';
import { INSURANCE_URL } from '@Constants';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { header, admin } = settings;
const { title, title_button, dashboard, info_block } = admin;
let { dv_widget } = admin;

export const InsuranceAdmin = ({ images }) => {
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
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
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
      <main className="admin-content">
        <div className="container">
          <div className="container__col">
            <div className="admin-title-wrapper admin-content__header">
              <h1 className="admin-title-wrapper__title">{title}</h1>
              <div className="admin-title-actions admin-title-wrapper__actions">
                {admin.dv_buttons?.length && admin.dv_buttons.map((dvData, index) =>
                  <button className="admin-title-actions__btn" key={index} onClick={handleDVButtonClick(dvData)}>
                    {dvData.text}
                  </button>
                )}
                {!admin.dv_buttons?.length &&
                  <button className="admin-title-actions__btn">
                    <SettingsIcon className="admin-title-actions__btn-icon" fill={title_button.style.color} />
                    {title_button.text}
                  </button>
                }
              </div>
            </div>
          </div>
          <section className="dashboard">
            {dashboard.map(({ title, description }, index) => (
              <div key={index} className="dashboard__item">
                <div className="dashboard-block">
                  <div className="dashboard-block__icon-wrapper">
                    <img src={images.dashboard[index]} alt="" />
                  </div>
                  <p className="dashboard-block__title">{title}</p>
                  <p className="dashboard-block__description">{description}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="admin-info-block-section">
            <div className="container__col">
              <div className="admin-info-block">
                <div className="admin-info-block-content admin-info-block__content-side">
                  <p className="admin-info-block-content__title">{info_block.title}</p>
                  <p className="admin-info-block-content__description">{info_block.description}</p>
                  <button type="button" className="button button--md">show details</button>
                </div>
                <div className="admin-info-block-image admin-info-block__image-side"
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