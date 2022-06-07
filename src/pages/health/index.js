import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { HealthHome } from './home';
import { HEALTH_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { HealthDashboard } from './dashboard';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, copyright, links, dashboard, common_images, telemed } = settings;

function getImage(image) {
  return getImagePath('health', image)
}

const faviconImages = {
  favicon: getImage(common_images.favicon),
  appleTouchIcon: getImage(common_images.apple_touch_icon),
}

const logos = {
  logo: getImage(common_images.logo),
  dialog_logo: getImage(common_images.dialog_logo),
  dashboard_logo: getImage(common_images.dashboard_logo),
}

const componentImages = {
  telemed: getImage(telemed.image),
  sidebar_tile_banner: getImage(dashboard.sidebar.tile.image),
}

const dashboardImages = {
  quick_link_icons: dashboard.portal.quick_links.map(link => getImage(link.icon)),
  action_tile_icons: dashboard.portal.action_tiles.map(tile => getImage(tile.icon)),
}

const homePageImages = {
  banner: getImage(header.banner.image),
}

//json styles binding
const useStyles = makeStyles({
  health: {
    '& .header-wrapper': header.style,
    '& .header-nav__item, & .header-auth-actions__link': header.links.style,
    '& .header-wrapper--dashboard .header-nav__item, & .header-wrapper--dashboard .header-auth-actions__link': dashboard.navigation.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .header-wrapper--dashboard .header-auth-actions__user-name': {
      color: dashboard.navigation.links.style.color
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
    '& .header-wrapper--dashboard .header-auth-actions__circle-icon': {
      ...dashboard.navigation.style,
      '& path': {
        fill: dashboard.navigation.style.color
      },
      '&:hover': {
        ...dashboard.navigation.style['&:hover'],
        '& path': {
          fill: dashboard.navigation.style['&:hover'].color,
        },
      }
    },
    '& .header-wrapper--dashboard .header-auth-actions__actions-wrapper': dashboard.navigation.links.style,
    '& .dashboard-header-nav': dashboard.navigation.style,
    '& .header-nav--dashboard .header-nav__item': dashboard.navigation.links.style,
    '& .telemed': telemed.style,
    '& .alert-banner': home_page.alert_banner.style,
    '& .alert-banner .alert-banner__link': home_page.alert_banner.link.style,
    '& .program-info-block__link': home_page.programs_section.links.style,
    '& .dashboard-sidebar__link': dashboard.sidebar.style,
    '& .health-link': links.style,
    '& .copyright-section': copyright.style,
  },
});

export function Health() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...faviconImages,
    })
  }, []);

  const dashboardClass = window.location.pathname.includes('dashboard') ? ' health-dashboard' : '';

  return (
    <div className={`health viewport-container ${classes.health}${dashboardClass}`}>
      <Switch>
        <Route exact path={HEALTH_ROUTES.HOME} component={() => (
          <HealthHome images={{ ...logos, ...homePageImages, ...componentImages }} />
        )} />
        <Route exact path={HEALTH_ROUTES.DASHBOARD} component={() => (
          <HealthDashboard images={{ ...logos, ...componentImages, ...dashboardImages }} />
        )} />
        <Route exact path={HEALTH_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${HEALTH_ROUTES.HOME}/*`} to={HEALTH_ROUTES.HOME} />
      </Switch>
    </div>
  )
}