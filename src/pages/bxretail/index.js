import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { BxretailHome } from './home';
import { BXRETAIL_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { BxretailAdmin } from './admin';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, copyright, links, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('bxretail', image)
}

const faviconImages = {
  favicon: getImage(common_images.favicon),
  appleTouchIcon: getImage(common_images.apple_touch_icon),
}

const logos = {
  logo: getImage(common_images.logo),
  dialog_logo: getImage(common_images.dialog_logo),
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
  bxretail: {
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
    '& .admin-dashboard .dashboard-content__tile': admin.dashboard_tiles.style,
    '& .bxretail-link': links.style,
    '& .copyright-section': copyright.style,
  },
});

export function Bxretail() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...faviconImages,
    })
  }, []);

  const adminClass = window.location.pathname.includes('admin') ? ' bxretail-admin' : '';

  return (
    <div className={`bxretail viewport-container ${classes.bxretail}${adminClass}`}>
      <Switch>
        <Route exact path={BXRETAIL_ROUTES.HOME} component={() => (
          <BxretailHome images={{ ...logos, ...homeImages }} />
        )} />
        <Route exact path={BXRETAIL_ROUTES.ADMIN} component={() => (
          <BxretailAdmin images={{ ...logos }} />
        )} />
        <Route exact path={BXRETAIL_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${BXRETAIL_ROUTES.HOME}/*`} to={BXRETAIL_ROUTES.HOME} />
      </Switch>
    </div>
  )
}