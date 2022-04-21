import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, SKWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { CartIcon, NotificationIcon } from './components/icons';
import { RETAIL_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateAdminSettings } from '@Helpers';

const { admin } = settings;

export const RetailAdmin = ({ images }) => {
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
                    <Link to={RETAIL_URL} className="header-auth-actions__link">Log Out</Link>
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
                <div className="admin-sidebar__footer">
                    <div>{admin.sidebar.text}</div>
                    <div className="admin-sidebar__logos">
                      {images.sidebar_logos.map((logo, index) => 
                        <img key={index} src={logo} alt="" />
                      )}
                    </div>
                </div>
              </div>
              <div className="admin-content">
                <div className="dashboard-header">
                  <h1 className="dashboard-header__title">{admin.dashboard.title}</h1>
                  <div className="dashboard-header__action"><div>{admin.dashboard.dropdown_placeholder}</div></div>
                </div>
                <div className="dashboard-content">
                  <div className="products">
                    {admin.dashboard.products.map((product, index) => 
                      <div key={index} className="product">
                        {product.badge && <div className="product__badge">{product.badge}</div>}
                        <img className="product__image" src={images.product_images[index]} alt={product.title} />
                        <div className="product__title">{product.title}</div>
                        <img className="product__rating-image" src={images.product_rating_images[index]} alt="Rating" />
                        <p className="product__price">{product.price} <small>{product.price_subtext}</small></p>
                        {product.delivery_options.map((option, deliveryIndex) => 
                          <div key={deliveryIndex} className="product__delivery"><small>{option}</small></div>
                        )}
                        {product.add_sk_flow &&
                          <button className="button button--sm product__add" onClick={handleSKButtonClick(product.add_sk_flow)}>
                            <CartIcon className="product__add--icon" />
                            {product.add_sk_flow.text}
                          </button>
                        }
                        {!product.add_sk_flow &&
                          <button className="button button--sm product__add"><CartIcon className="product__add--icon" /> Add</button>
                        }
                      </div>
                    )}
                  </div>
                  <div className="products-pagination">
                    <div>Showing 1-6 of 234 results</div>
                    <div>Items per Page: <span className="products-pagination__per-page">6</span></div>
                    <div>
                      <span className="products-pagination__pages">
                          {[1,2,3,4].map((page, index) => 
                            <span key={index}>{page}</span>
                          )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="admin-help-button">
        <button className="button">{admin.help_button}</button>
      </div>
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