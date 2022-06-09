import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { AuthDialogExamples } from '@Components';
import { AirlinesHome } from './home';
import { AIRLINES_ROUTES } from './constants';
import { AirlinesDashboard } from './dashboard';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

//common settings
const { title, header, home_page, dashboard, footer, button, common_images } = settings;

function getImage(image) {
  return getImagePath('airlines', image)
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
  categories: home_page.categories_section.items.map(({ image }) => {
    return getImage(image)
  }),
  offers: home_page.offers_section.items.map(({ image }) => {
    return getImage(image)
  })
}

const dashboardImages = {
  sidebar: dashboard.sidebar.items.map(({ image }) => {
    return getImage(image)
  }),
}

//json styles binding
const useStyles = makeStyles({
  airlines: {
    '& .header-wrapper': header.style,
    '& .header-auth-actions__actions-wrapper': header.style,
    '& .header-nav__item, & .header-auth-actions__link': header.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .button, & .header-auth-actions__button, & .banner-form__button': button.style,
    '& .header-auth-actions__user-icon': {
      ...button.style,
      '& path': {
        fill: button.style.color
      },
      '&:hover': {
        ...button.style['&:hover'],
        '& path': {
          fill: button.style['&:hover'].color,
        },
      }
    },
    '& .banner-content__title': home_page.banner.title.style,
    '& .banner-content__sub-title': home_page.banner.subtitle.style,
    '& .home-page-categories__item': home_page.categories_section.category_styles,
    '& .offer-block__button': home_page.offers_section.button_styles,
    '& .footer': footer.style,
    '& .footer-contacts__tel,& .footer-socials__title,& .copyright-content__text': {
      color: footer.text_color
    },
    '& .footer-menu__item': footer.navigation.style,
    '& .footer-social-icon': {
      ...footer.socials.style,
      '& path': {
        fill: footer.socials.style.color
      },
      '&:hover': {
        ...footer.socials.style['&:hover'],
        '& path': {
          fill: footer.socials.style['&:hover'].color,
        },
      }
    },
  },
});

export function Airlines() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, []);

  return (
    <div className={`airlines viewport-container ${classes.airlines}`} >
      <Switch>
        <Route exact path={AIRLINES_ROUTES.HOME} component={() => (
          <AirlinesHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={AIRLINES_ROUTES.DASHBOARD} component={() => (
          <AirlinesDashboard images={{ ...logos, ...dashboardImages }} />
        )} />
        <Route exact path={AIRLINES_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${AIRLINES_ROUTES.HOME}/*`} to={AIRLINES_ROUTES.HOME} />
      </Switch>
    </div>
  )
}