import React, { useRef } from 'react';
import { AuthDialog } from '@Components';
import { CartIcon, FavoriteIcon, UserIcon } from './components/icons';
import { Footer } from './components';
import settings from './settings.json';
import { globalSettings } from '../../global-settings';

const { header, home_page } = settings;

export const FoodServiceHome = ({ images }) => {
  const authRef = useRef(null);

  let { dv_buttons } = settings;

  if (!dv_buttons || !dv_buttons.length) {
    dv_buttons = globalSettings.dv_buttons;
  }

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
              <div className="header__actions">
                <div className="header-auth-actions">
                  <span className="header-auth-actions__icon">
                    <CartIcon />
                  </span>
                  <span className="header-auth-actions__icon">
                    <FavoriteIcon />
                  </span>
                  <div className="header-auth-actions__actions-wrapper">
                    {dv_buttons.map((dvData, index) => (
                      <button key={index} className="header-auth-actions__button"
                        onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>
                    ))}
                  </div>
                  <div className="header-auth-actions__user-icon header-auth-actions__user-icon--home_page">
                    <UserIcon fill="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="banner__content">
          <div className="container">
            <div className="container__col">
              <div className="banner-content">
                <div className="banner-content__title">{home_page.banner.title}</div>
                <p className="banner-content__description">{home_page.banner.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="order-form-section">
        <div className="order-form-section__bg"></div>
        <div className="container order-form-section__content">
          <div className="container__col">
            <div className="order-form-wrapper">
              <h5 className="order-form-wrapper__title">{home_page.form_section.title}</h5>
              <form className="order-form order-form-wrapper__form">
                <div className="order-form__form-controls">
                  <div className="form-group order-form__form-control">
                    <input className="form-group__input" placeholder="Your Name" />
                  </div>
                  <div className="form-group order-form__form-control">
                    <input className="form-group__input" placeholder="Phone Number" />
                  </div>
                </div>
                <button type="button" className="order-form__button button button--md">{home_page.form_section.button_text}</button>
              </form>
              <div className="order-form-wrapper__img" style={{ backgroundImage: `url(${images.form})` }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="products-section">
        <div className="container">
          <div className="container__col">
            <h4 className="products-section__title">{home_page.products_section.title}</h4>
          </div>
          <div className="products-list">
            {home_page.products_section.items.map((item, index) => (
              <div key={index} className="products-list__item">
                <div className="product-wrapper">
                  <img src={images.products[index]} className="product-wrapper__image" alt="product 1" />
                  <p className="product-wrapper__title">{item.title}</p>
                  <p className="product-wrapper__description">{item.description}</p>
                  <div className="product-footer-info product-wrapper__footer">
                    <div className="product-footer-info__side">
                      <p className="product-footer-info__old-price">{item.old_price}</p>
                      <p className="product-footer-info__new-price">{item.price}</p>
                    </div>
                    <div className="product-footer-info__side">
                      <button className="product-footer-info__action">
                        <CartIcon />
                      </button>
                    </div>
                  </div>
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