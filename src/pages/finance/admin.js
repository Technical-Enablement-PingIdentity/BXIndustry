import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, SKWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { NotificationIcon } from './components/icons';
import { FINANCE_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { RewardsCard } from './components/rewards-card';
import { consolidateAdminSettings } from '@Helpers';

const { admin } = settings;

export const FinanceAdmin = ({ images }) => {
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
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <div className="header__actions">
                <div className="header-auth-actions">
                  {admin.user_name && (
                    <p className="header-auth-actions__user-name">{admin.user_name}</p>
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
                <RewardsCard cardImage={images.rewards_card} withLink={true} />
              </div>
              <div className="admin-content">
                <div className="dashboard-header">
                  <h1 className="dashboard-header__title">{admin.dashboard_title}</h1>
                  <div className="dashboard-header__things"><div>{admin.dashboard_dropdown}</div></div>
                </div>
                <div className="dashboard-content">
                  {admin.dashboard_tiles.tiles.map((tile, tileIndex) => (
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