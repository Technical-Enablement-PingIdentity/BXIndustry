import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, DVWidget } from '@Components';
import { CaretIcon } from '@Components/icons';
import { UserIcon } from './components/icons';
import { COMPANY_URL } from '@Constants';
import { Footer, VideoTile } from './components';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';


const { dashboard, header } = settings;

export const CompanyDashboard = ({ images }) => {
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
                  <Link to={COMPANY_URL} className="header-auth-actions__button">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="dashboard-section">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-section__header">
              {dashboard.dv_buttons?.length &&
                <div className="dashboard-section__dv-buttons">
                  {dashboard.dv_buttons.map((dvData, index) => 
                    <button className="button" key={index}
                      onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                  )}
                </div>
              }
            </div>
            <div className="dashboard-section__container">
              <div className="dashboard-section__reporting">
                <h1 className="reporting__title">{dashboard.title}</h1>
                <p>{dashboard.filter_header}</p>
                <div className="reporting__filter-container">
                  {dashboard.filters.map((filter, index) => (
                    <div key={index} className="reporting__filter">{filter} <CaretIcon className="filter-caret" fill={dashboard.filter_color} /></div>
                  ))}
                  <button className="button" style={{ background: dashboard.filter_color }}>{dashboard.filter_button}</button>
                </div>
                <div>
                  <img className="reporting__large-chart" src={images.largeChart} alt="Large chart" />
                  <img className="reporting__large-chart reporting__large-chart--mobile" src={images.largeChartMobile} alt="Large chart" />
                </div>
                <div className="reporting__small-charts">
                  {images.smallCharts.map((chart, index) => (
                    <div key={index} className="reporting__small-chart">
                      <img src={chart} alt="Small chart" />
                    </div>
                  ))}
                </div>
                <div className="reporting__components">
                    <div className="reporting__components__icon">{dashboard.components_section.icon.text}</div>
                    <h4 className="reporting__components__title">{dashboard.components_section.title}</h4>
                    <p className="reporting__components__subtitle">{dashboard.components_section.subtitle}</p>
                    <button className="button button--md">{dashboard.components_section.button.text}</button>
                </div>
              </div>
              <div className="dashboard-section__videos">
                <h3 className="videos__title">{dashboard.videos.title}</h3>
                <div className="dashboard-section__videos__container">
                  {images.videos.map((image, index) => (
                    <VideoTile key={index} imageUrl={image} altText={`Video thumbnail ${index}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {dashboard.dv_widget && (
        <div className="container">
          <div className="container__col">
            <DVWidget companyKey={dashboard.dv_widget.company_key} policyKey={dashboard.dv_widget.policy_key}
              apiKey={dashboard.dv_widget.api_key} />
          </div>
        </div>
      )}
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}