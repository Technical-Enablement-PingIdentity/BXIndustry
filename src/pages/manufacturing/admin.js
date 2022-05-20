import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { UserIcon } from './components/icons';
import { Footer } from './components';
import { AuthDialog, DVWidget } from '@Components';
import { MANUFACTURING_URL } from '@Constants';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin } = settings;
const { header, user_name, title, services, dv_widget } = admin;

export const ManufacturingAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

  const handleDVButtonClick = (dvData) => {
    return () => {
      authRef.current.openDialog(dvData);
    }
  }

  return (
    <>
      <header className="admin-header-wrapper">
        <div className="container">
          <div className="container__col">
            <div className="admin-header">
              <button className="hamburger-menu admin-header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper admin-header__logo-wrapper admin-header__side">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <ul className="admin-header-nav admin-header__nav">
                {header.navigation.links.items.map((link, index) => (
                  <li key={index} className="admin-header-nav__item">{link}</li>
                ))}
              </ul>
              <div className="admin-header__side">
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
      <section className="admin-content">
        <div className="container">
          <div className="container__col">
            <div className="admin-title-wrapper admin-content__header">
              <h1 className="admin-title-wrapper__title">{title}</h1>
              <div className="admin-title-actions admin-title-wrapper__actions">
                {admin.dv_buttons?.length && admin.dv_buttons.map((dvData, index) =>
                  <button className="admin-title-actions__btn button button--outlined" key={index}
                    onClick={handleDVButtonClick(dvData)}>
                    {dvData.text}
                  </button>
                )}
                {!admin.dv_buttons?.length &&
                  <>
                    <button className="admin-title-actions__btn button button--outlined">
                      Factory information
                    </button>
                    <button className="admin-title-actions__btn button button--outlined">
                      INDUSTRY BENCHMARKS
                    </button>
                  </>
                }
              </div>
            </div>
            <div className="admin-services-list">
              {services.map(({ title, description, button }, index) => (
                <div key={index} className="admin-image-block admin-services-list__item">
                  <div className="admin-image-block__image" style={{
                    backgroundImage: `url(${images.services[index]})`
                  }}></div>
                  <div className="admin-image-block-content admin-image-block__content">
                    <p className="admin-image-block-content__title">{title}</p>
                    <p className="admin-image-block-content__text">{description}</p>
                    <button className="admin-image-block-content__button button button--secondary">
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