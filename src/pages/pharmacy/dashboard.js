import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { ArrowIcon, PdfDocument } from './components/icons';
import { PHARMACY_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard, header } = settings;

export const PharmacyDashboard = ({ images }) => {
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
                  <Link to={PHARMACY_URL} className="header-auth-actions__link">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="dashboard">
        {dashboard.dv_buttons?.length &&
          <div className="container dashboard__actions">
            <div className="container__col">
              {dashboard.dv_buttons.map((dvData, index) => 
                <button className="button" key={index} onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
              )}
            </div>
          </div>
        }
        <div className="container">
          <div className="dashboard-content">
            <div className="dashboard-articles-wrapper dashboard-content__articles">
              <h1 className="dashboard-articles-wrapper__title">{dashboard.title}</h1>
              <div className="dashboard-articles">
                {dashboard.articles.map(({ title, button }, index) => (
                  <div key={index} className="dashboard-articles__item">
                    <div className="article">
                      <div className="article__img-wrapper">
                        <div className="article__img" style={{ backgroundImage: `url(${images.articles[index]})` }}></div>
                      </div>
                      <div className="article-description">
                        <p className="article-description__title">{title}</p>
                        <button className="article-description__button">
                          {button}
                          <ArrowIcon className="article-description__button-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard-applications-list dashboard-content__applications">
              <h6 className="dashboard-applications-list__title">{dashboard.sidebar.title}</h6>
              {dashboard.sidebar.items.map(({ head, title, date }, index) => (
                <div key={index} className="dashboard-applications-list__item">
                  <div className="document-block">
                    <div className="document-block__head document-block__head">{head}</div>
                    <div className="document-block-info document-block__body">
                      <p className="document-block-info__title">{title}</p>
                    </div>
                    <div className="document-block-footer document-block__footer">
                      <p className="document-block-footer__date">{date}</p>
                      <PdfDocument fill="#8A99A8" />
                    </div>
                  </div>
                </div>
              ))}
              <button className="dashboard-applications-list__button button button--outlined button--md">
                {dashboard.sidebar.button}
              </button>
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