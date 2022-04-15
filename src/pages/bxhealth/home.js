import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { MapMark, UserIcon } from '@Components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';
import { MessageIcon } from './components/icons';
import { Telemed } from './components/telemed';

const { header, home_page } = settings;

export const BxhealthHome = ({ images }) => {
  const authRef = useRef(null);

  let { sk_buttons } = settings;

  if (!sk_buttons || !sk_buttons.length) {
    sk_buttons = globalSettings.sk_buttons;
  }

  const handleSKButtonClick = (skData) => {
    return () => {
      if (skData.policy_key && skData.api_key && skData.company_key) {
        authRef.current.openDialog(skData);
      }
    }
  }

  return (
    <>
      <div className="header-wrapper" style={{ backgroundImage: `url(${images.banner})`}}>
        <div className="container">
          <div className="container__col">
            <header className="header">
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
                  <div className="header-auth-actions__icon">
                    <MapMark fill="#163657" />
                    <MessageIcon fill="#163657" className="message-icon" />
                  </div>
                  <div className="header-auth-actions__actions-wrapper">
                    {sk_buttons.map((skData, index) => (
                      <button key={index} className="header-auth-actions__button"
                        onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                    ))}
                  </div>
                  <div className="header-auth-actions__circle-icon header-auth-actions__circle-icon--home_page">
                    <UserIcon fill="#0E264C" />
                  </div>
                </div>
              </div>
            </header>
            <nav className="header__navigation">
              <ul className="header-nav">
                {header.links.items.map((item, index) => (
                  <li key={index} className="header-nav__item">
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="banner">
              <div className='banner__left'>
                <h1 className="banner__title">{header.banner.title}</h1>
                <h6 className="banner__subtitle">{header.banner.sub_title}</h6>
                <button className='button'>{header.banner.button}</button>
              </div>
              <div className='banner__right'>
                <Telemed image={images.telemed} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='alert-banner'>
        <div className='container'>
          <div className='container__col'>
            <span className='alert-banner__message'>{home_page.alert_banner.message}</span>
            {home_page.alert_banner.links.map((link, index) =>
              <span key={index} className="bxhealth-link alert-banner__link" onClick={handleSKButtonClick(link)}>{link.text}</span>
            )}
          </div>
        </div>
      </div>
      <section className="programs-section">
        <div className="container">
          <div className="programs-list">
            {home_page.programs_section.items.map(({ title, description, link }, index) => (
              <div key={index} className="programs-list__item">
                <div className="program-info-block">
                  <h3 className="program-info-block__title">{title}</h3>
                  <p className="program-info-block__description">{description}</p>
                  <span className='program-info-block__link bxhealth-link'>{link}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}