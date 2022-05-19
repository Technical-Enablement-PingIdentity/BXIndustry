import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { StarIcon, UserIcon } from './components/icons';
import { Footer } from './components';
import { AuthDialog, DVWidget } from '@Components';
import { SPORTS_URL } from '@Constants';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { header, admin } = settings;
const { title } = admin;
let { dv_widget } = admin;

export const SportsAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

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
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
                )}
                <button className="header-auth-actions__icon-wrapper">
                  <UserIcon />
                </button>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={SPORTS_URL} className="header-auth-actions__link">log out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="admin-content">
        <div className="container">
          <div className="container__col">
            <div className="admin-title-wrapper admin-content__header">
              <h1 className="admin-title-wrapper__title">{title}</h1>
              <div className="admin-title-actions admin-title-wrapper__actions">
                {admin.dv_buttons?.length && admin.dv_buttons.map((dvData, index) =>
                  <button className="admin-title-actions__btn button button--outlined" key={index} onClick={handleDVButtonClick(dvData)}>
                    {dvData.text}
                  </button>
                )}
              </div>
            </div>
          </div>
          <section className="admin-dashboard">
            <div className="admin-dashboard__highlight banner" style={{backgroundImage: `url(${images.jumbotron}`}}>
              <div className="banner__gradient">
                <h1 className="banner-content__title">{admin.dashboard.jumbotron.title}</h1>
                <p className="banner-content__description">{admin.dashboard.jumbotron.description}</p>
                <button className="button">{admin.dashboard.jumbotron.button}</button>
              </div>
            </div>
            <div className="container__col">
              <h3 className="admin-dashboard__title">{admin.subtitle.text}</h3>
              <div className="admin-dashboard__tiles">
                  {admin.dashboard.tiles.map((tile, index) => (
                    <div key={index} className="admin-dashboard__tile">
                      <h3 className="tile__title">{tile.title}</h3>
                      <div className="tile__card" style={tile.card.style}>
                        <h5 className="tile__card__heading">{tile.card.heading}</h5>
                        <h2 className="tile__card__cost">{tile.card.cost}</h2>
                        <div className="tile__card__stars">
                          {Array.from(Array(tile.card.stars), (_, i) => (
                            <StarIcon key={i} />
                          ))}
                        </div>
                      </div>
                      <button type="button" className="button button--outlined" style={tile.button.style}>{tile.button.text}</button>
                      <p className="tile__link">{tile.link}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <section className="admin-news">
            <div className="container">
              <div className="container__col">
                <div className="news-section__header">
                  <h1 className="news-section__title">{admin.news_section.title}</h1>
                </div>
                <div className="news-section__articles content-block">
                  {admin.news_section.articles.map((article, index) => (
                    <div className="news-article content-block__tile" key={index} style={{backgroundImage: `url(${images.articles[index]})`}}>
                      <div className="news-article__title">
                        <h3>{article.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {!!dv_widget && (
            <div className="container">
              <div className="container__col">
                <DVWidget companyKey={dv_widget.company_key} policyKey={dv_widget.policy_key}
                  apiKey={dv_widget.api_key} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}