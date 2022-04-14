import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, SKWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { MessageIcon } from './components/icons';
import { BXHEALTH_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin } = settings;

export const BxhealthAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

  const handleSKButtonClick = (skData) => {
    return () => {
      authRef.current.openDialog(skData);
    }
  }

  return (
    <>
      <header className="header-wrapper header-wrapper--admin">
        <div className="container">
          <div className="container__col">
            <div className="header">
              <button className="hamburger-menu header__menu-trigger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper header__logo">
                <img className="logo-wrapper__img" src={images.admin_logo || images.logo} alt="logo" />
              </div>
              <div className="header__actions">
                <div className="header-auth-actions">
                  {admin.user_name && (
                    <p className="header-auth-actions__user-name">{admin.user_name}</p>
                  )}
                  <div className="header-auth-actions__icon">
                    <MessageIcon />
                  </div>
                  <div className="header-auth-actions__circle-icon">
                    <UserIcon fill="#0E264C" />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    <Link to={BXHEALTH_URL} className="header-auth-actions__link">Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
            <nav className="admin-header-nav">
              <div className="container">
                <div className="container__col">
                  <ul className="header-nav header-nav--admin">
                    {admin.navigation.links.items.map((item, index) => (
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
      <section className="admin-welcome">
        <div className="container">
          <div className="container__col admin-welcome__wrapper">
            <h1 className="admin-welcome__message">{admin.welcome}</h1>
            {admin.sk_buttons?.length && 
              <div className="admin-welcome__buttons">
                {admin.sk_buttons.map((skData, index) => 
                  <button className="button" key={index}
                   onClick={handleSKButtonClick(skData)}>{skData.text}</button>)}
              </div>
            }
          </div>
        </div>
      </section>
      <section className="admin-section">
        <div className="container">
          <div className="container__col">
            <div className="admin-dashboard">
              <div className="admin-sidebar">
                <ul>
                  {admin.sidebar.links.map((link, index) => (
                    <li key={index} className="admin-sidebar__link">{link}</li>
                  ))}
                </ul>
                <div className="admin-sidebar__tile--container">
                  <div className="admin-sidebar__tile">
                      <img src={images.sidebar_tile_banner} alt={admin.sidebar.tile.title} />
                      <h3>{admin.sidebar.tile.title}</h3>
                      <p>{admin.sidebar.tile.description}</p>
                      <div className="bxhealth-link">{admin.sidebar.tile.link}</div>
                  </div>
                </div>
              </div>
              <div className="admin-content">
                <div className="dashboard-header">
                  <h1 className="dashboard-header__title">{admin.dashboard_title}</h1>
                  <div className="dashboard-header__things"><div>{admin.dashboard_dropdown}</div></div>
                </div>
                <div className="dashboard-content">
                  <div className="dashboard-content__header">{admin.dashboard.header}</div>
                  <div className="dashboard-content__info">
                    <div className="dashboard-content__patient-info">
                      <span>{admin.dashboard.subheader}</span> <span className="dashboard-content__patient-number">{admin.dashboard.patient_number}</span>
                    </div>
                    <div className="dashboard-content__patient-links">
                      {admin.dashboard.header_links.map((link, index) => 
                        <span className="bxhealth-link" key={index}>{link}</span>
                      )}
                    </div>
                  </div>
                  <div className="dashboard-content__tiles-container">
                    {admin.dashboard.action_tiles.map((tile, index) => 
                      <div key={index} className="dashboard-content__tile">
                        <img src={images.action_tile_icons[index]} alt={tile.title} />
                        <div className="dashboard-content__tile-title">{tile.title}</div>
                        <p>{tile.description}</p>
                        <button className="button">{tile.button}</button>
                      </div>
                    )}                    
                  </div>
                  <div className="dashboard-content__quick-links">
                    <div className="dashboard-content__quick-links-title">Quick Links</div>
                    {admin.dashboard.quick_links.map((link, index) =>
                      <span key={index}>
                        <img src={images.quick_link_icons[index]} alt={link.text} />
                        <span className="bxhealth-link">{link.text}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {admin.sk_widget && (
        <div className="container">
          <div className="container__col">
            <SKWidget companyKey={admin.sk_widget.company_key} policyKey={admin.sk_widget.policy_key}
              apiKey={admin.sk_widget.api_key} />
          </div>
        </div>
      )}
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}