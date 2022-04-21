import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { HealthHome } from './home';
import { HEALTH_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { HealthAdmin } from './admin';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, copyright, links, admin, common_images, telemed } = settings;

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
  admin_logo: getImage(common_images.admin_logo),
}

const componentImages = {
  telemed: getImage(telemed.image),
  sidebar_tile_banner: getImage(admin.sidebar.tile.image),
}

const adminImages = {
  quick_link_icons: admin.dashboard.quick_links.map(link => getImage(link.icon)),
  action_tile_icons: admin.dashboard.action_tiles.map(tile => getImage(tile.icon)),
}

const homePageImages = {
  banner: getImage(header.banner.image),
}

//json styles binding
const useStyles = makeStyles({
  health: {
    '& .header-wrapper': header.style,
    '& .header-nav__item, & .header-auth-actions__link': header.links.style,
    '& .header-wrapper--admin .header-nav__item, & .header-wrapper--admin .header-auth-actions__link': admin.navigation.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .header-wrapper--admin .header-auth-actions__user-name': {
      color: admin.navigation.links.style.color
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
    '& .header-wrapper--admin .header-auth-actions__circle-icon': {
      ...admin.navigation.style,
      '& path': {
        fill: admin.navigation.style.color
      },
      '&:hover': {
        ...admin.navigation.style['&:hover'],
        '& path': {
          fill: admin.navigation.style['&:hover'].color,
        },
      }
    },
    '& .header-wrapper--admin .header-auth-actions__actions-wrapper': admin.navigation.links.style,
    '& .admin-header-nav': admin.navigation.style,
    '& .header-nav--admin .header-nav__item': admin.navigation.links.style,
    '& .telemed': telemed.style,
    '& .alert-banner': home_page.alert_banner.style,
    '& .alert-banner .alert-banner__link': home_page.alert_banner.link.style,
    '& .program-info-block__link': home_page.programs_section.links.style,
    '& .admin-sidebar__link': admin.sidebar.style,
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

  const adminClass = window.location.pathname.includes('admin') ? ' health-admin' : '';

  return (
    <div className={`health viewport-container ${classes.health}${adminClass}`}>
      <Switch>
        <Route exact path={HEALTH_ROUTES.HOME} component={() => (
          <HealthHome images={{ ...logos, ...homePageImages, ...componentImages }} />
        )} />
        <Route exact path={HEALTH_ROUTES.ADMIN} component={() => (
          <HealthAdmin images={{ ...logos, ...componentImages, ...adminImages }} />
        )} />
        <Route exact path={HEALTH_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${HEALTH_ROUTES.HOME}/*`} to={HEALTH_ROUTES.HOME} />
      </Switch>
    </div>
  )
}