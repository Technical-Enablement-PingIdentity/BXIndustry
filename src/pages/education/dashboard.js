import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon, CheckIcon } from '@Components/icons';
import { NotificationIcon, ClockIcon } from './components/icons';
import { EDUCATION_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard, header } = settings;

export const EducationDashboard = ({ images }) => {
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
              <nav className="header__navigation">
                <ul className="header-nav">
                  {header.links.items.map((item, index) => (
                    <li key={index} className="header-nav__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </nav>
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
                    <Link to={EDUCATION_URL} className="header-auth-actions__link">Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="dashboard-nav-wrapper">
        <nav className="dashboard-header-nav">
          <div className="container">
            <div className="container__col dashboard-header-nav__wrapper">
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
      </section>
      {dashboard.dv_buttons?.length &&
        <section className="dashboard-actions">
          <div className="container">
            <div className="container__col">
              <div className="dashboard-actions__buttons">
                {dashboard.dv_buttons.map((dvData, index) => 
                  <button className="button" key={index} 
                    onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                )}
              </div>
            </div>
          </div>
        </section>
      }
      <section className="dashboard-section">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-content">
              <div className="dashboard-content__info">
                <div className="program">
                  <div className="program-header program__head">
                    <p className="program-header__info">Your Current Program</p>
                    <p className="program-header__info--large">Finance</p>
                    <p className="program-header__info">2 of 5 topics complete</p>
                    <p className="program-header__info">0 of 3 tests complete</p>
                  </div>
                  <ul className="programm-check-list">
                    <li className="check-list-block programm-check-list__item">
                      <div className="check-list-item-info check-list-block__side">
                        <div className="check-mark check-mark--checked check-list-item-info__mark">
                          <CheckIcon className="check-mark__icon" />
                        </div>
                        <p className="check-list-item-info__name">What are assets and liabilities.</p>
                      </div>
                      <div className="check-list-block__side check-list-block__side--right_side">
                        <ClockIcon className="check-list-block__time-icon" />
                        <p className="check-list-block__time">9 min</p>
                      </div>
                    </li>
                    <li className="check-list-block programm-check-list__item">
                      <div className="check-list-item-info check-list-block__side">
                        <div className="check-mark check-mark--checked check-list-item-info__mark">
                          <CheckIcon className="check-mark__icon" />
                        </div>
                        <p className="check-list-item-info__name">Asset optimization.</p>
                      </div>
                      <div className="check-list-block__side check-list-block__side--right_side">
                        <ClockIcon className="check-list-block__time-icon" />
                        <p className="check-list-block__time">12 min</p>
                      </div>
                    </li>
                    <li className="check-list-block programm-check-list__item">
                      <div className="check-list-item-info check-list-block__side">
                        <div className="check-mark check-list-item-info__mark">
                          <CheckIcon className="check-mark__icon" />
                        </div>
                        <p className="check-list-item-info__name">Risks. Defining the risk profile.</p>
                      </div>
                      <div className="check-list-block__side check-list-block__side--right_side">
                        <ClockIcon className="check-list-block__time-icon" />
                        <p className="check-list-block__time">10 min</p>
                      </div>
                    </li>
                    <li className="check-list-block programm-check-list__item">
                      <div className="check-list-item-info check-list-block__side">
                        <div className="check-mark check-list-item-info__mark">
                          <CheckIcon className="check-mark__icon" />
                        </div>
                        <p className="check-list-item-info__name">Banking products. How to choose a bank.</p>
                      </div>
                      <div className="check-list-block__side check-list-block__side--right_side">
                        <ClockIcon className="check-list-block__time-icon" />
                        <p className="check-list-block__time">9 min</p>
                      </div>
                    </li>
                    <li className="check-list-block programm-check-list__item">
                      <div className="check-list-item-info check-list-block__side">
                        <div className="check-mark check-list-item-info__mark">
                          <CheckIcon className="check-mark__icon" />
                        </div>
                        <p className="check-list-item-info__name">Stocks and how to choose a broker.</p>
                      </div>
                      <div className="check-list-block__side check-list-block__side--right_side">
                        <ClockIcon className="check-list-block__time-icon" />
                        <p className="check-list-block__time">9 min</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dashboard-articles dashboard-content__articles">
                <h3 className="dashboard-articles__title">{dashboard.sidebar.title}</h3>
                <div className="articles-list">
                  {dashboard.sidebar.items.map(({ title }, index) => (
                    <div key={index} className="articles-list__item">
                      <div className="image-info-block image-info-block--small"
                        style={{ backgroundImage: `url(${images.sidebar[index]})` }}>
                        <p className="image-info-block__name">{title}</p>
                      </div>
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