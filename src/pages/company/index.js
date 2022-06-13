import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { CompanyHome } from './home';
import { COMPANY_ROUTES } from './constants';
import { CompanyDashboard } from './dashboard';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, dashboard, footer, button, common_images } = settings;

function getImage(image) {
  return getImagePath('company', image)
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
  videoTiles: home_page.banner.video_tiles.map(image => getImage(image)),
  mainContentImage: getImage(home_page.main_content.image),
}

const dashboardImages = {
  largeChart: getImage(dashboard.large_chart),
  largeChartMobile: getImage(dashboard.large_chart_mobile),
  smallCharts: dashboard.small_charts.map(chart => getImage(chart)),
  videos: dashboard.videos.video_tiles.map(video => getImage(video)),
}

//json styles binding
const useStyles = makeStyles({
  company: {
    '&.company-dashboard .header-wrapper': dashboard.navigation.style,
    '&.company-dashboard .reporting__components__icon': dashboard.components_section.icon.style,
    '&.company-dashboard .reporting__components .button': dashboard.components_section.button.style,
    '& .header-wrapper': header.style,
    '& .header-auth-actions__actions-wrapper': header.style,
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .header-nav__item': header.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .header-auth-actions__button': header.auth_links.style,
    '& .header-auth-actions__line': {
      background: header.auth_separator.color
    },
    '& .header-auth-actions__user-icon': {
      ...header.icon_button.style,
      '& path': {
        fill: header.icon_button.style.color
      }
    },
    '& .banner': home_page.banner.style,
    '& .main-content .bullets .bullet__index': home_page.main_content.bullets.style,
    '& .button, & .banner-form__button': {
      ...button.style,
      '&--outlined': button.outlined_style
    },
    '& .footer': footer.style,
    '& .footer .footer-content': footer.content.style,
    '& .footer-menu__item': footer.navigation.style,
    '& .footer-social-icon, & .footer-contacts__button': {
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
    '& .copyright-content__text': footer.copyright.style,
  },
});

export function Company() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, []);

  const dashboardClass = window.location.pathname.includes('dashboard') ? ' company-dashboard' : '';

  return (
    <div className={`company viewport-container ${classes.company}${dashboardClass}`} >
      <Switch>
        <Route exact path={COMPANY_ROUTES.HOME} component={() => (
          <CompanyHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={COMPANY_ROUTES.DASHBOARD} component={() => (
          <CompanyDashboard images={{ ...logos, ...dashboardImages }} />
        )} />
        <Route exact path={COMPANY_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${COMPANY_ROUTES.HOME}/*`} to={COMPANY_ROUTES.HOME} />
      </Switch>
    </div>
  )
}