import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { RetailHome } from './home';
import { RETAIL_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { RetailAdmin } from './admin';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, copyright, links, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('retail', image)
}

const faviconImages = {
  favicon: getImage(common_images.favicon),
  appleTouchIcon: getImage(common_images.apple_touch_icon),
}

const logos = {
  logo: getImage(common_images.logo),
  dialog_logo: getImage(common_images.dialog_logo),
}

const adminImages = {
  sidebar_logos: admin.sidebar.logos.map(logo => getImage(logo)),
  product_images: admin.dashboard.products.map(product => getImage(product.image)),
  product_rating_images: admin.dashboard.products.map(product => getImage(product.rating_image)),
}

const homeImages = {
  features: home_page.features_section.items.map(({ image }) => getImage(image)),
  jumbotron: {
    left: getImage(home_page.jumbotron.left.image),
    right: getImage(home_page.jumbotron.right.image),
  },
  banner: {
    logos: home_page.banner.logos.map(logo => getImage(logo)),
  }
}

//json styles binding
const useStyles = makeStyles({
  retail: {
    '& .header-wrapper': header.style,
    '& .header-nav__item, & .header-auth-actions__link': header.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .header-auth-actions__button': header.button.style,
    '& .footer': footer.style,
    '& .footer-info-block__title': {
      color: footer.text_color
    },
    '& .footer-menu__item': footer.navigation.style,
    '& .footer-social-icon, & .footer-info-block__button': {
      ...footer.button.style,
      '& path': {
        fill: footer.button.style.color
      },
      '&:hover': {
        ...footer.button.style['&:hover'],
        '& path': {
          fill: footer.button.style['&:hover'].color,
        },
      }
    },
    '& .button': button.style,
    '& .header-auth-actions__circle-icon': {
      ...header.button.style,
      '& path': {
        fill: header.button.style.color
      },
      '&:hover': {
        ...header.button.style['&:hover'],
        '& path': {
          fill: header.button.style['&:hover'].color,
        },
      }
    },
    '& .banner': home_page.banner.style,
    '& .admin-header-nav': admin.navigation.style,
    '& .header-nav--admin .header-nav__item': admin.navigation.links.style,
    '& .features-info-block__link': home_page.features_section.links.style,
    '& .admin-sidebar__link': admin.sidebar.style,
    '& .retail-link': links.style,
    '& .copyright-section': copyright.style,
    '& .dashboard-content .product__badge': admin.dashboard.product_badges.style,
    '& .dashboard-content .product__title': admin.dashboard.product_titles.style,
  },
});

export function Retail() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...faviconImages,
    })
  }, []);

  const adminClass = window.location.pathname.includes('admin') ? ' retail-admin' : '';

  return (
    <div className={`retail viewport-container ${classes.retail}${adminClass}`}>
      <Switch>
        <Route exact path={RETAIL_ROUTES.HOME} component={() => (
          <RetailHome images={{ ...logos, ...homeImages }} />
        )} />
        <Route exact path={RETAIL_ROUTES.ADMIN} component={() => (
          <RetailAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={RETAIL_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${RETAIL_ROUTES.HOME}/*`} to={RETAIL_ROUTES.HOME} />
      </Switch>
    </div>
  )
}