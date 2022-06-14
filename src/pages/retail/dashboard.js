import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthDialog, DVWidget } from '@Components';
import { UserIcon } from '@Components/icons';
import { CartIcon, NotificationIcon } from './components/icons';
import { RETAIL_URL } from '@Constants';
import { Footer } from './components';
import settings from './settings.json';
import { consolidateDashboardSettings } from '@Helpers';

const { dashboard } = settings;

export const RetailDashboard = ({ images }) => {
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
                    <Link to={RETAIL_URL} className="header-auth-actions__link">Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
            <nav className="dashboard-header-nav">
              <div className="container">
                <div className="container__col">
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
          </div>
        </div>
      </header>
      <section className="dashboard-welcome">
        <div className="container">
          <div className="container__col dashboard-welcome__wrapper">
            <h1 className="dashboard-welcome__message">{dashboard.welcome}</h1>
            {dashboard.dv_buttons?.length && 
              <div className="dashboard-welcome__buttons">
                {dashboard.dv_buttons.map((dvData, index) => 
                  <button className="button" key={index}
                   onClick={handleDVButtonClick(dvData)}>{dvData.text}</button>)}
              </div>
            }
          </div>
        </div>
      </section>
      <section className="dashboard-section">
        <div className="container">
          <div className="container__col">
            <div className="dashboard-portal">
              <div className="dashboard-sidebar">
                <ul>
                  {dashboard.sidebar.links.map((link, index) => (
                    <li key={index} className="dashboard-sidebar__link">{link}</li>
                  ))}
                </ul>
                <div className="dashboard-sidebar__footer">
                    <div>{dashboard.sidebar.text}</div>
                    <div className="dashboard-sidebar__logos">
                      {images.sidebar_logos.map((logo, index) => 
                        <img key={index} src={logo} alt="" />
                      )}
                    </div>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="portal-header">
                  <h1 className="portal-header__title">{dashboard.portal.title}</h1>
                  <div className="portal-header__action"><div>{dashboard.portal.dropdown_placeholder}</div></div>
                </div>
                <div className="portal-content">
                  <div className="products">
                    {dashboard.portal.products.map((product, index) => 
                      <div key={index} className="product">
                        {product.badge && <div className="product__badge">{product.badge}</div>}
                        <img className="product__image" src={images.product_images[index]} alt={product.title} />
                        <div className="product__title">{product.title}</div>
                        <img className="product__rating-image" src={images.product_rating_images[index]} alt="Rating" />
                        <p className="product__price">{product.price} <small>{product.price_subtext}</small></p>
                        {product.delivery_options.map((option, deliveryIndex) => 
                          <div key={deliveryIndex} className="product__delivery"><small>{option}</small></div>
                        )}
                        {product.add_dv_flow &&
                          <button className="button button--sm product__add" onClick={handleDVButtonClick(product.add_dv_flow)}>
                            <CartIcon className="product__add--icon" />
                            {product.add_dv_flow.text}
                          </button>
                        }
                        {!product.add_dv_flow &&
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
      <div className="dashboard-help-button">
        <button className="button">{dashboard.help_button}</button>
      </div>
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