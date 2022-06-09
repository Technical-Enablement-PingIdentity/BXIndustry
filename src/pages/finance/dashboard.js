import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { NotificationIcon } from './components/icons';
import { FINANCE_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { RewardsCard } from './components/rewards-card';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard } = settings;

export const FinanceDashboard = ({ images }) => {
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
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <div className="header__actions">
                <div className="header-auth-actions">
                  {dashboard.user_name && (
                    <p className="header-auth-actions__user-name">{dashboard.user_name}</p>
                  )}
                  <div className="header-auth-actions__icon">
                    <NotificationIcon />
                  </div>
                  <div className="header-auth-actions__circle-icon">
                    <UserIcon fill="#0E264C" />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    <Link to={FINANCE_URL} className="header-auth-actions__link">Log Out</Link>
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
            <div className="dashboard-dashboard">
              <div className="dashboard-sidebar">
                <ul>
                  {dashboard.sidebar.links.map((link, index) => (
                    <li key={index} className="dashboard-sidebar__link">{link}</li>
                  ))}
                </ul>
                <RewardsCard cardImage={images.rewards_card} withLink={true} />
              </div>
              <div className="dashboard-content">
                <div className="dashboard-header">
                  <h1 className="dashboard-header__title">{dashboard.dashboard_title}</h1>
                  <div className="dashboard-header__things"><div>{dashboard.dashboard_dropdown}</div></div>
                </div>
                <div className="dashboard-content">
                  {dashboard.dashboard_tiles.tiles.map((tile, tileIndex) => (
                    <div key={tileIndex} className="dashboard-content__tile">
                      <div className="tile-header">
                        <div className="tile-header__title">{tile.title}</div>
                        <button className='button button--sm tile-header__button'>{tile.action}</button>
                      </div>
                      <table>
                        <thead>
                          <tr>
                            <th>Accounts</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tile.accounts.map((account, accountIndex) => (
                            <tr key={accountIndex}>
                              <td><span className="finance-link">{account.name}</span></td>
                              <td>{account.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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