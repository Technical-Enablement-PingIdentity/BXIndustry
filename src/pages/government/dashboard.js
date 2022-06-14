import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import classnames from 'classnames';
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon, ArrowRight, PdfDocument } from './components/icons';
import { ExpandArrow } from '@Components/icons';
import { Copyright } from '@Components';
import { GOVERNMENT_URL } from '@Constants';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard, copyright } = settings;
const { header, title, applications_section, footer, portal } = dashboard;
let { dv_widget } = dashboard;

export const GovernmentDashboard = ({ images }) => {
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
            <div className="header header--dashboard">
              <button className="hamburger-menu header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper header__logo">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <ul className="dashboard-header-main-menu header__dashboard-nav">
                {header.top_navigation.map((item, index) => (
                  <li key={index} className="dashboard-header-main-menu__item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="header-auth-actions header__actions">
                {dashboard.user_name && (
                  <p className="header-auth-actions__user-name">{dashboard.user_name}</p>
                )}
                <div className="header-auth-actions__icon-wrapper">
                  <UserIcon />
                </div>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={GOVERNMENT_URL} className="header-auth-actions__link">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="dashboard-header-nav">
          <div className="container">
            <div className="container__col">
              <ul className="header-nav header-nav--dashboard">
                {header.bottom_navigation.links.items.map(({ text, sub_menu }, index) => (
                  <li key={index} className={classnames('header-nav-item', 'header-nav__item', {
                    'header-nav-item--sub_menu': sub_menu
                  })}>
                    {text}
                    {sub_menu && (
                      <ExpandArrow className="header-nav-item__arrow" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="dashboard-portal">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-portal-title__container">
              <h1 className="dashboard-portal__title">{title}</h1>
              <div className="dashboard-portal__actions">
                {dashboard.dv_buttons?.length && 
                  dashboard.dv_buttons.map((dvData, index) => 
                  <button className="button" key={index}
                    onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                )}
              </div>
            </div>
            <div className="dashboard-portal-categories">
              {portal.map(({ title, description_items, button }, index) => (
                <div key={index} className="dashboard-portal-category dashboard-portal-categories__item">
                  <div className="dashboard-category-info-block dashboard-portal-category__info">
                    <div className="dashboard-category-info-block__content">
                      <p className="dashboard-category-info-block__title">{title}</p>
                      <ul className="dashboard-category-info-list dashboard-category-info-block__list">
                        {description_items.map((item, index) => (
                          <li key={index} className="dashboard-category-info-list__item">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="dashboard-category-info-block__image">
                      <img src={images.portal[index]} className="img-responsive" alt="" />
                    </div>
                  </div>
                  <div className="dashboard-portal-category__btn-wrapper">
                    <button className="arrow-btn">{button} <ArrowRight className="arrow-btn__arrow" fill="#CF8C1A" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="dashboard-documents">
        <div className="container">
          <div className="container__col">
            <h5 className="dashboard-documents__title">{applications_section.title}</h5>
          </div>
          <div className="dashboard-dicuments-list">
            {applications_section.applications.map((item, index) => (
              <div key={index} className="dashboard-dicuments-list__item">
                <div className="document-block">
                  <div className={classnames('document-block__head', 'document-block__head', {
                    'document-block__head--error': item.error_style
                  })}>{item.head_text}</div>
                  <div className="document-block-info document-block__body">
                    <p className="document-block-info__title">{item.title}</p>
                    <p className="document-block-info__description">{item.description}</p>
                  </div>
                  <div className="document-block-footer document-block__footer">
                    <p className="document-block-footer__date">07/10/2021</p>
                    <PdfDocument />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container__col">
            <button className="dashboard-documents__button button button--outlined button--md">
              Add new application
            </button>
          </div>
        </div>
      </section>
      {dv_widget && (
        <div className="container">
          <div className="container__col">
            <DVWidget companyKey={dv_widget.company_key} policyKey={dv_widget.policy_key}
              apiKey={dv_widget.api_key} />
          </div>
        </div>
      )}
      <footer className="dashboard-footer">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-footer-content">
              <ul className="dashboard-footer-links-list dashboard-footer-content__list">
                {footer.navigation.map((item, index) => (
                  <li key={index} className="dashboard-footer-links-list__item">{item}</li>
                ))}
              </ul>
              <button className="dashboard-footer-content__button">
                Online Support
              </button>
            </div>
          </div>
        </div>
        <Copyright text={copyright.text} />
        <AuthDialog ref={authRef} logo={images.dialog_logo} />
      </footer>
    </>
  )
}