import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { MessageIcon } from './components/icons';
import { HEALTH_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard } = settings;

export const HealthDashboard = ({ images }) => {
  const authRef = useRef(null);
  consolidateDashboardSettings(dashboard);

  const handleDVButtonClick = (dvData) => {
    return () => {
      authRef.current.openDialog(dvData);
    }
  }

  return (
    <>
      <header className="header-wrapper header-wrapper--dashboard">
        <div className="container">
          <div className="container__col">
            <div className="header">
              <button className="hamburger-menu header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper header__logo">
                <img className="logo-wrapper__img" src={images.dashboard_logo || images.logo} alt="logo" />
              </div>
              <div className="header__actions">
                <div className="header-auth-actions">
                  {dashboard.user_name && (
                    <p className="header-auth-actions__user-name">{dashboard.user_name}</p>
                  )}
                  <div className="header-auth-actions__icon">
                    <MessageIcon />
                  </div>
                  <div className="header-auth-actions__circle-icon">
                    <UserIcon fill="#0E264C" />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    <Link to={HEALTH_URL} className="header-auth-actions__link">Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
            <nav className="dashboard-header-nav">
              <div className="container">
                <div className="container__col">
                  <ul className="header-nav header-nav--dashboard">
                    {dashboard.navigation.links.items.map((item, index) => (
                      <li key={index} className="header-nav-item header-nav__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <section className="dashboard-welcome">
        <div className="container">
          <div className="container__col dashboard-welcome__wrapper">
            <h1 className="dashboard-welcome__message">{dashboard.welcome}</h1>
            {dashboard.dv_buttons?.length && 
              <div className="dashboard-welcome__buttons">
                {dashboard.dv_buttons.map((dvData, index) => 
                  <button className="button" key={index}
                   onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>)}
              </div>
            }
          </div>
        </div>
      </section>
      <section className="dashboard-section">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-portal">
              <div className="dashboard-sidebar">
                <ul>
                  {dashboard.sidebar.links.map((link, index) => (
                    <li key={index} className="dashboard-sidebar__link">{link}</li>
                  ))}
                </ul>
                <div className="dashboard-sidebar__tile--container">
                  <div className="dashboard-sidebar__tile">
                      <img src={images.sidebar_tile_banner} alt={dashboard.sidebar.tile.title} />
                      <h3>{dashboard.sidebar.tile.title}</h3>
                      <p>{dashboard.sidebar.tile.description}</p>
                      <div className="health-link">{dashboard.sidebar.tile.link}</div>
                  </div>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="portal-header">
                  <h1 className="portal-header__title">{dashboard.portal_title}</h1>
                  <div className="portal-header__things"><div>{dashboard.portal_dropdown}</div></div>
                </div>
                <div className="portal-content">
                  <div className="portal-content__header">{dashboard.portal.header}</div>
                  <div className="portal-content__info">
                    <div className="portal-content__patient-info">
                      <span>{dashboard.portal.subheader}</span> <span className="portal-content__patient-number">{dashboard.portal.patient_number}</span>
                    </div>
                    <div className="portal-content__patient-links">
                      {dashboard.portal.header_links.map((link, index) => 
                        <span className="health-link" key={index}>{link}</span>
                      )}
                    </div>
                  </div>
                  <div className="portal-content__tiles-container">
                    {dashboard.portal.action_tiles.map((tile, index) => 
                      <div key={index} className="portal-content__tile">
                        <img src={images.action_tile_icons[index]} alt={tile.title} />
                        <div className="portal-content__tile-title">{tile.title}</div>
                        <p>{tile.description}</p>
                        <button className="button">{tile.button}</button>
                      </div>
                    )}                    
                  </div>
                  <div className="portal-content__quick-links">
                    <div className="portal-content__quick-links-title">Quick Links</div>
                    {dashboard.portal.quick_links.map((link, index) =>
                      <span key={index}>
                        <img src={images.quick_link_icons[index]} alt={link.text} />
                        <span className="health-link">{link.text}</span>
                      </span>
                    )}
                  </div>
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