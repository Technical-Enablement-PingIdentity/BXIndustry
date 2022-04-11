import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { AuthDialog, SKWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { ArrowIcon, PdfDocument } from './components/icons';
import { PHARMACY_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin, header } = settings;

export const PharmacyAdmin = ({ images }) => {
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
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
                )}
                <div className="header-auth-actions__user-icon">
                  <UserIcon />
                </div>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={PHARMACY_URL} className="header-auth-actions__link">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="admin">
        {admin.sk_buttons?.length &&
          <div className="container admin__actions">
            <div className="container__col">
              {admin.sk_buttons.map((skData, index) => 
                <button className="button" key={index} onClick={handleSKButtonClick(skData)}>{skData.text}</button>
              )}
            </div>
          </div>
        }
        <div className="container">
          <div className="admin-content">
            <div className="admin-articles-wrapper admin-content__articles">
              <h1 className="admin-articles-wrapper__title">{admin.title}</h1>
              <div className="admin-articles">
                {admin.articles.map(({ title, button }, index) => (
                  <div key={index} className="admin-articles__item">
                    <div className="article">
                      <div className="article__img-wrapper">
                        <div className="article__img" style={{ backgroundImage: `url(${images.articles[index]})` }}></div>
                      </div>
                      <div className="article-description">
                        <p className="article-description__title">{title}</p>
                        <button className="article-description__button">
                          {button}
                          <ArrowIcon className="article-description__button-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="admin-applications-list admin-content__applications">
              <h6 className="admin-applications-list__title">{admin.sidebar.title}</h6>
              {admin.sidebar.items.map(({ head, title, date }, index) => (
                <div key={index} className="admin-applications-list__item">
                  <div className="document-block">
                    <div className="document-block__head document-block__head">{head}</div>
                    <div className="document-block-info document-block__body">
                      <p className="document-block-info__title">{title}</p>
                    </div>
                    <div className="document-block-footer document-block__footer">
                      <p className="document-block-footer__date">{date}</p>
                      <PdfDocument fill="#8A99A8" />
                    </div>
                  </div>
                </div>
              ))}
              <button className="admin-applications-list__button button button--outlined button--md">
                {admin.sidebar.button}
              </button>
            </div>
          </div>
        </div>
        {!!admin.sk_widget && (
          <div className="container">
            <div className="container__col">
              <SKWidget companyKey={admin.sk_widget.company_key} policyKey={admin.sk_widget.policy_key}
                apiKey={admin.sk_widget.api_key} />
            </div>
          </div>
        )}
      </section>
      <Footer />
      <AuthDialog ref={authRef} logo={images.dialog_logo} />
    </>
  )
}