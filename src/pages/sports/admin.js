import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { StarIcon, UserIcon } from './components/icons';
import { Footer } from './components';
import { AuthDialog, SKWidget } from '@Components';
import { SPORTS_URL } from '@Constants';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { header, admin } = settings;
const { title, info_block } = admin;
let { sk_widget } = admin;

export const SportsAdmin = ({ images }) => {
  const authRef = useRef(null);
  consolidateAdminSettings(admin);

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
                {admin.sk_buttons?.length && admin.sk_buttons.map((skData, index) =>
                  <button className="admin-title-actions__btn" key={index} onClick={handleSKButtonClick(skData)}>
                    {skData.text}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content__main">
              <section className="admin-dashboard">
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
                          <button type="button" className="button button--outlined">{tile.button}</button>
                          <p className="tile__link">{tile.link}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
              <section className="admin-info-block-section">
                <div className="container__col">
                  <div className="admin-info-block">
                    <div className="admin-info-block-content admin-info-block__content-side">
                      <h1 className="admin-info-block-content__title">{info_block.title}</h1>
                      <h2 className="admin-info-block-content__subtitle">{info_block.subtitle}</h2>
                      <p className="admin-info-block-content__description">{info_block.description.text}</p>
                      <button type="button" className="button button--md button--outlined">{info_block.button}</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="page-content__sidebar">
              <section className="admin-news">
                <div className="container">
                  <div className="container__col">
                    <div className="news-section__header">
                      <h1 className="news-section__title">{admin.news_section.title}</h1>
                    </div>
                    <div className="news-section__articles content-block content-block--sidebar">
                      {admin.news_section.articles.map((article, index) => (
                        <div className="news-article content-block__tile" key={index} style={{backgroundImage: `url(${images.articles[index]})`}}>
                          <div className="news-article__title">{article.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {!!sk_widget && (
          <div className="container">
            <div className="container__col">
              <SKWidget companyKey={sk_widget.company_key} policyKey={sk_widget.policy_key}
                apiKey={sk_widget.api_key} />
            </div>
          </div>
        )}
      </main>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}