import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { GovernmentHome } from './home';
import { GovernmentDashboard } from './dashboard';
import { GOVERNMENT_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, home_page, footer, dashboard, button, common_images } = settings;

function getImage(image) {
  return getImagePath('government', image)
}

const favoconsImages = {
  favicon: getImage(common_images.favicon),
  appleTouchIcon: getImage(common_images.apple_touch_icon),
}

const logos = {
  logo: getImage(common_images.logo),
  dialog_logo: getImage(common_images.dialog_logo),
}

const homePageImages = {
  banner: getImage(home_page.banner.image),
}

const dashboardImages = {
  portal: dashboard.portal.map(({ image }) => {
    return getImage(image)
  }),
}

const useStyles = makeStyles({
  government: {
    '& .header-wrapper': home_page.header.style,
    '& .header-auth-actions__actions-wrapper': home_page.header.style,
    '& .hamburger-menu__line': {
      backgroundColor: home_page.header.navigation.links.style.color
    },
    '& .header-nav-item': {
      ...home_page.header.navigation.links.style,
      '&__arrow path': {
        stroke: home_page.header.navigation.links.style.color
      },
      '&:hover': {
        ...home_page.header.navigation.links.style['&:hover'],
        '& .header-nav-item__arrow path': {
          stroke: home_page.header.navigation.links.style['&:hover'].color
        }
      }
    },
    '& .header-auth-actions__link, & .dashboard-header-main-menu__item': home_page.header.navigation.links.style,
    '& .header-auth-actions__location': {
      ...home_page.header.location.style,
      '& path, & circle': {
        stroke: home_page.header.location.style.color,
      }
    },
    '& .button': {
      ...button.style,
      '&--outlined': button.outlined_style
    },
    '& .arrow-btn': {
      ...home_page.info_section.button.style,
      '& path': {
        fill: home_page.info_section.button.style.color
      },
      '&:hover': {
        ...home_page.info_section.button.style['&:hover'],
        '& path': {
          fill: home_page.info_section.button.style['&:hover'].color
        }
      }
    },
    '& .footer': footer.style,
    '& .footer-nav-col__title, & .footer-contacts__title, & .footer-phone-wrapper__phone, & .copyright-content__text': footer.text.style,
    '& .footer-nav-list__item, & .dashboard-footer-links-list__item': footer.links.style,
    '& .footer-phone-wrapper__button, & .footer-social-icon, & .dashboard-footer-content__button': {
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
    '& .header-auth-actions__user-name': {
      color: home_page.header.navigation.links.style.color
    },
    '& .dashboard-header-nav': dashboard.header.bottom_navigation.style,
    '& .header-nav--dashboard .header-nav__item': {
      ...dashboard.header.bottom_navigation.links.style,
      '& .header-nav-item__arrow path': {
        stroke: dashboard.header.bottom_navigation.links.style.color
      },
      '&:hover': {
        ...dashboard.header.bottom_navigation.links.style['&:hover'],
        '& .header-nav-item__arrow path': {
          stroke: dashboard.header.bottom_navigation.links.style['&:hover'].color
        }
      }
    }
  },
});

export function Government() {
  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`government viewport-container ${classes.government}`} >
      <Switch>
        <Route exact path={GOVERNMENT_ROUTES.HOME} component={() => (
          <GovernmentHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={GOVERNMENT_ROUTES.DASHBOARD} component={() => (
          <GovernmentDashboard images={{ ...logos, ...dashboardImages }} />
        )} />
        <Route exact path={GOVERNMENT_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dailog_logo} />
        )} />
        <Redirect from={`${GOVERNMENT_ROUTES.HOME}/*`} to={GOVERNMENT_ROUTES.HOME} />
      </Switch>
    </div>
  )
}