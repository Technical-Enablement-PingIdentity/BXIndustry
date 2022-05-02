import React, { useRef } from 'react';
import settings from './settings.json';
import { AuthDialog } from '@Components';
import { SearchIcon } from '@Components/icons';
import { Footer } from './components';
import { UserIcon } from './components/icons';
import { globalSettings } from '../../global-settings';

const { home_page, header } = settings;
const { banner, news_section } = home_page;

export const SportsHome = ({ images }) => {
  const authRef = useRef(null);

  let { sk_buttons } = settings;

  if (!sk_buttons || !sk_buttons.length) {
    sk_buttons = globalSettings.sk_buttons;
  }

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
            <div className="header">
              <button className="hamburger-menu header__menu-triger">
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
                <span className="hamburger-menu__line"></span>
              </button>
              <div className="logo-wrapper">
                <img className="logo-wrapper__img" src={images.logo} alt="logo" />
              </div>
              <ul className="navigation">
                {header.navigation.links.items.map((item, index) => (
                  <li key={index} className="navigation__item">
                    <span className="navigation-item-link">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="header-auth-actions header__auth-actions">
                <SearchIcon className="search-icon" />
                <div className="header-auth-actions__actions-wrapper">
                  {sk_buttons.map((skData, index) => (
                    <button key={index} className="header-auth-actions__button header-auth-actions__button--outlined"
                      onClick={handleSKButtonClick(skData)}>{skData.text}</button>
                  ))}
                </div>
                <button className="header-auth-actions__icon-wrapper header-auth-actions__icon-wrapper--home_page">
                  <UserIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="banner__gradient">
          <div className="container">
            <div className="container__col">
              <div className="banner-content">
                <h1 className="banner-content__title">
                  {banner.title.text}
                </h1>
                <p className="banner-content__description">
                  {banner.description.text}
                </p>
                <button className="button banner-content__button">{banner.button}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section">
        <div className="container">
          <div className="container__col">
            <div className="news-section__header">
              <h1 className="news-section__title">{news_section.title}</h1>
              <button className="button button--outlined">{news_section.button}</button>
            </div>
            <div className="news-section__articles">
              {news_section.articles.map((article, index) => (
                <div className="news-article" key={index} style={{backgroundImage: `url(${images.articles[index]})`}}>
                  <div className="news-article__title">{article.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="services-section">
        <div className="container">
          <div className="services-list services-section__list">
            {services.map(({ title, description }, index) => (
              <div key={index} className="services-list__item">
                <div className="service-block">
                  <img src={images.services[index]} className="service-block__icon" alt="" />
                  <p className="service-block__title">{title}</p>
                  <p className="service-block__description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}