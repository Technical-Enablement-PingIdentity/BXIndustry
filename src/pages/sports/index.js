import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { SportsHome } from './home';
import { SportsDashboard } from './dashboard';
import { SPORTS_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, dashboard, common_images } = settings;

function getImage(image) {
  return getImagePath('sports', image)
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
  articles: home_page.news_section.articles.map(article => getImage(article.image)),
}

const dashboardImages = {
  articles: dashboard.news_section.articles.map(article => getImage(article.image)),
  jumbotron: getImage(dashboard.portal.jumbotron.image),
}

//json styles binding
const useStyles = makeStyles({
  sports: {
    '& .header-wrapper': header.style,
    '& .header-auth-actions__actions-wrapper': header.style,
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .navigation-item-link': header.navigation.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .button, & .header-auth-actions__button': {
      ...button.style,
      '&--outlined': button.outlined_style
    },
    '& .header-auth-actions .search-icon': {
      '& path': {
        fill: header.search_icon.style.color
      }
    },
    '& .header-auth-actions__icon-wrapper': {
      ...header.icon_button.style,
      '& path': {
        fill: header.icon_button.style.color
      }
    },
    '& .header-auth-actions__link': header.links.style,
    '& .navigation-wrapper': header.navigation.style,
    '& .footer': footer.style,
    '& .footer-info-block__title, & .copyright-content__text': {
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
    '& .banner-content__title': home_page.banner.title.style,
    '& .banner-content__description': home_page.banner.description.style,
    '& .dashboard-dashboard__title': dashboard.subtitle.style,
    '& .dashboard-dashboard__tile .tile__link': dashboard.portal.link.style
  },
});

export function Sports() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`sports viewport-container ${classes.sports}`} >
      <Switch>
        <Route exact path={SPORTS_ROUTES.HOME} component={() => (
          <SportsHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={SPORTS_ROUTES.DASHBOARD} component={() => (
          <SportsDashboard images={{ ...logos, ...dashboardImages }} />
        )} />
        <Route exact path={SPORTS_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${SPORTS_ROUTES.HOME}/*`} to={SPORTS_ROUTES.HOME} />
      </Switch>
    </div>
  )
}