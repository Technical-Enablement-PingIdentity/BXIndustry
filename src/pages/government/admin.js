import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import classnames from 'classnames';
import { AuthDialog, SKWidget } from '@Components';
import { UserIcon, ArrowRight, PdfDocument } from './components/icons';
import { ExpandArrow } from '@Components/icons';
import { Copyright } from '@Components';
import { GOVERNMENT_URL } from '@Constants';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin, copyright } = settings;
const { header, title, applications_section, footer, dashboard } = admin;
let { sk_widget } = admin;

export const GovernmentAdmin = ({ images }) => {
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
            <div className="header header--admin">
              <button className="hamburger-menu header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper header__logo">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <ul className="admin-header-main-menu header__admin-nav">
                {header.top_navigation.map((item, index) => (
                  <li key={index} className="admin-header-main-menu__item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="header-auth-actions header__actions">
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
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
        <nav className="admin-header-nav">
          <div className="container">
            <div className="container__col">
              <ul className="header-nav header-nav--admin">
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
      <section className="admin-dashboard">
        <div className="container">
          <div className="container__col">
            <div className="admin-dashboard-title__container">
              <h1 className="admin-dashboard__title">{title}</h1>
              <div class="admin-dashboard__actions">
                {admin.sk_buttons?.length && 
                  admin.sk_buttons.map((skData, index) => 
                  <button className="button" key={index}
                    onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                )}
              </div>
            </div>
            <div className="admin-dashboard-categories">
              {dashboard.map(({ title, description_items, button }, index) => (
                <div key={index} className="admin-dashboard-category admin-dashboard-categories__item">
                  <div className="admin-category-info-block admin-dashboard-category__info">
                    <div className="admin-category-info-block__content">
                      <p className="admin-category-info-block__title">{title}</p>
                      <ul className="admin-category-info-list admin-category-info-block__list">
                        {description_items.map((item, index) => (
                          <li key={index} className="admin-category-info-list__item">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="admin-category-info-block__image">
                      <img src={images.dashboard[index]} className="img-responsive" alt="" />
                    </div>
                  </div>
                  <div className="admin-dashboard-category__btn-wrapper">
                    <button className="arrow-btn">{button} <ArrowRight className="arrow-btn__arrow" fill="#CF8C1A" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="admin-documents">
        <div className="container">
          <div className="container__col">
            <h5 className="admin-documents__title">{applications_section.title}</h5>
          </div>
          <div className="admin-dicuments-list">
            {applications_section.applications.map((item, index) => (
              <div key={index} className="admin-dicuments-list__item">
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
            <button className="admin-documents__button button button--outlined button--md">
              Add new application
            </button>
          </div>
        </div>
      </section>
      {sk_widget && (
        <div className="container">
          <div className="container__col">
            <SKWidget companyKey={sk_widget.company_key} policyKey={sk_widget.policy_key}
              apiKey={sk_widget.api_key} />
          </div>
        </div>
      )}
      <footer className="admin-footer">
        <div className="container">
          <div className="container__col">
            <div className="admin-footer-content">
              <ul className="admin-footer-links-list admin-footer-content__list">
                {footer.navigation.map((item, index) => (
                  <li key={index} className="admin-footer-links-list__item">{item}</li>
                ))}
              </ul>
              <button className="admin-footer-content__button">
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