import React from 'react';
import { Link } from "react-router-dom";
import { SKWidget } from '@Components';
import { CheckIcon } from '@Components/icons';
import { CartIcon, FavoriteIcon, UserIcon, NotificationIcon, DocumentIcon } from './components/icons';
import { FOOD_SERVICE_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { admin, header } = settings;

export const FoodServiceAdmin = ({ images }) => {
  if (!admin.sk_widget && globalSettings.admin?.sk_widget) {
    admin.sk_widget = globalSettings.admin?.sk_widget;
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
              <div className="header__catalog-action">
                <button className="header-catalog-button">
                  <span className="internal-hamburger-menu header-catalog-button__icon">
                    <span className="internal-hamburger-menu__line"></span>
                    <span className="internal-hamburger-menu__line"></span>
                    <span className="internal-hamburger-menu__line"></span>
                  </span>
                  Product Catalog
                </button>
              </div>
              <nav className="header__navigation">
                <ul className="header-nav">
                  {header.links.items.map((item, index) => (
                    <li key={index} className="header-nav__item">{item}</li>
                  ))}
                </ul>
              </nav>
              <div className="header-auth-actions header__actions">
                <span className="header-auth-actions__icon">
                  <CartIcon />
                </span>
                <span className="header-auth-actions__icon">
                  <FavoriteIcon />
                </span>
                <span className="header-auth-actions__icon">
                  <NotificationIcon />
                </span>
                {admin.user_name && (
                  <p className="header-auth-actions__user-name">{admin.user_name}</p>
                )}
                <div className="header-auth-actions__user-icon">
                  <UserIcon fill="#fff" />
                </div>
                <div className="header-auth-actions__actions-wrapper">
                  <Link to={FOOD_SERVICE_URL} className="header-auth-actions__link">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="admin-content">
        <div className="container">
          <div className="container__col">
            <h1 className="admin-content__title">{admin.title}</h1>
            <p className="admin-content__description">{admin.subtitle}</p>
          </div>
          <section className="product-categories">
            {admin.products_section.map(({ title, subtitle, button }, index) => (
              <div key={index} className="product-categories__item">
                <div className="product-category" style={{ backgroundImage: `url(${images.products[index]})` }}>
                  <div className="product-category-info product-category__header product-category__content">
                    <p className="product-category-info__title">{title}</p>
                    <p className="product-category-info__name">{subtitle}</p>
                  </div>
                  <div className="product-category__footer product-category__content">
                    <button className="product-category__button button button--md">{button}</button>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className="user-info-section">
            <div className="user-info-section__info-list user-info-section__side">
              <div className="user-info-list-wrapper">
                <p className="user-info-list-wrapper__title">Your order history</p>
                <ul className="user-info-list">
                  <li className="info-list-item user-info-list__item">
                    <div className="info-list-item-main info-list-item__side">
                      <div className="check-mark info-list-item-main__checkbox-wrapper">
                        <CheckIcon />
                      </div>
                      <div>
                        <p className="info-list-item-main__title">December 12, 2021</p>
                        <p className="info-list-item-main__description">10 items</p>
                      </div>
                    </div>
                    <div className="info-list-item__side info-list-item__side--right">
                      <button type="button" className="info-list-item-action">
                        <DocumentIcon className="info-list-item-action__icon" />
                        Receipt
                      </button>
                    </div>
                  </li>
                  <li className="info-list-item user-info-list__item">
                    <div className="info-list-item-main info-list-item__side">
                      <div className="check-mark info-list-item-main__checkbox-wrapper">
                        <CheckIcon />
                      </div>
                      <div>
                        <p className="info-list-item-main__title">December 6, 2021</p>
                        <p className="info-list-item-main__description">22 items</p>
                      </div>
                    </div>
                    <div className="info-list-item__side info-list-item__side--right">
                      <button type="button" className="info-list-item-action">
                        <DocumentIcon className="info-list-item-action__icon" />
                        Receipt
                      </button>
                    </div>
                  </li>
                  <li className="info-list-item user-info-list__item">
                    <div className="info-list-item-main info-list-item__side">
                      <div className="check-mark info-list-item-main__checkbox-wrapper">
                        <CheckIcon />
                      </div>
                      <div>
                        <p className="info-list-item-main__title">November 28, 2021</p>
                        <p className="info-list-item-main__description">7 items</p>
                      </div>
                    </div>
                    <div className="info-list-item__side info-list-item__side--right">
                      <button type="button" className="info-list-item-action">
                        <DocumentIcon className="info-list-item-action__icon" />
                        Receipt
                      </button>
                    </div>
                  </li>
                  <li className="info-list-item user-info-list__item">
                    <div className="info-list-item-main info-list-item__side">
                      <div className="check-mark info-list-item-main__checkbox-wrapper">
                        <CheckIcon />
                      </div>
                      <div>
                        <p className="info-list-item-main__title">November 26, 2021</p>
                        <p className="info-list-item-main__description">12 items</p>
                      </div>
                    </div>
                    <div className="info-list-item__side info-list-item__side--right">
                      <button type="button" className="info-list-item-action">
                        <DocumentIcon className="info-list-item-action__icon" />
                        Receipt
                      </button>
                    </div>
                  </li>
                  <li className="info-list-item user-info-list__item">
                    <div className="info-list-item-main info-list-item__side">
                      <div className="check-mark info-list-item-main__checkbox-wrapper">
                        <CheckIcon />
                      </div>
                      <div>
                        <p className="info-list-item-main__title">November 23, 2021</p>
                        <p className="info-list-item-main__description">8 items</p>
                      </div>
                    </div>
                    <div className="info-list-item__side info-list-item__side--right">
                      <button type="button" className="info-list-item-action">
                        <DocumentIcon className="info-list-item-action__icon" />
                        Receipt
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-info-section__sidebar user-info-section__side">
              <div className="finance-block">
                <p className="finance-block__title">Cashback Program</p>
                <br />
                <div className="finance-card finance-block__main-info">
                  <p className="finance-card__description">Your Current Balance</p>
                  <p className="finance-card__title">$145</p>
                  <div className="finance-card__card-line"></div>
                </div>
                <p className="finance-block__link">More about Cashback Program</p>
              </div>
            </div>
          </section>
        </div>
        {admin.sk_widget && (
          <div className="container">
            <div className="container__col">
              <SKWidget companyKey={admin.sk_widget.company_key} policyKey={admin.sk_widget.policy_key}
                apiKey={admin.sk_widget.api_key} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}