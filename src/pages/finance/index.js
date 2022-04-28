import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { FinanceHome } from './home';
import { FINANCE_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { FinanceAdmin } from './admin';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, copyright, links, admin, common_images, rewards_card } = settings;

function getImage(image) {
  return getImagePath('finance', image)
}

const faviconImages = {
  favicon: getImage(common_images.favicon),
  appleTouchIcon: getImage(common_images.apple_touch_icon),
}

const logos = {
  logo: getImage(common_images.logo),
  dialog_logo: getImage(common_images.dialog_logo),
}

const componentImages = {
  rewards_card: getImage(rewards_card.image),
}

const homePageImages = {
  banner: getImage(header.banner.image),
}

//json styles binding
const useStyles = makeStyles({
  finance: {
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
    '& .admin-header-nav': admin.navigation.style,
    '& .header-nav--admin .header-nav__item': admin.navigation.links.style,
    '& .rewards-card': rewards_card.style,
    '& .alert-banner': home_page.alert_banner.style,
    '& .program-info-block__link': home_page.programs_section.links.style,
    '& .admin-sidebar__link': admin.sidebar.style,
    '& .admin-dashboard .dashboard-content__tile': admin.dashboard_tiles.style,
    '& .finance-link': links.style,
    '& .copyright-section': copyright.style,
  },
});

export function Finance() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...faviconImages,
    })
  }, []);

  const adminClass = window.location.pathname.includes('admin') ? ' finance-admin' : '';

  return (
    <div className={`finance viewport-container ${classes.finance}${adminClass}`}>
      <Switch>
        <Route exact path={FINANCE_ROUTES.HOME} component={() => (
          <FinanceHome images={{ ...logos, ...homePageImages, ...componentImages }} />
        )} />
        <Route exact path={FINANCE_ROUTES.ADMIN} component={() => (
          <FinanceAdmin images={{ ...logos, ...componentImages }} />
        )} />
        <Route exact path={FINANCE_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${FINANCE_ROUTES.HOME}/*`} to={FINANCE_ROUTES.HOME} />
      </Switch>
    </div>
  )
}