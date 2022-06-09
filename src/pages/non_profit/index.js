import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { NonProfitHome } from './home';
import { NON_PROFIT_ROUTES } from './constants';
import { NonProfitDashboard } from './dashboard';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, footer, button, home_page, dashboard, common_images } = settings;

function getImage(image) {
  return getImagePath('non_profit', image)
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
  left_image: getImage(home_page.banner.left_image),
  right_image: getImage(home_page.banner.right_image),
  charity_categories: home_page.charity_categories.items.map(({ image }) => {
    return getImage(image)
  })
}

const dashboardImages = {
  portal: dashboard.portal.map(({ image }) => {
    return getImage(image)
  }),
  articles: dashboard.articles.map(({ image }) => {
    return getImage(image)
  }),
}

//json styles binding
const useStyles = makeStyles({
  nonProfit: {
    '& .header-wrapper': header.style,
    '& .header-auth-actions__actions-wrapper': header.style,
    '& .header-nav__item,& .header-auth-actions__link': header.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .header-auth-actions__button': header.auth_buttons.style,
    '& .button, & .dashboard-article__icon-wrapper': {
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
    '& .header-auth-actions__user-icon': {
      ...header.icon_button.style,
      '& path': {
        fill: header.icon_button.style.color
      }
    },
    '& .footer': footer.style,
    '& .footer-contacts-socials__title,& .footer-phone-numbers__number, & .copyright-content__text': {
      color: footer.text_color
    },
    '& .footer-menu__item': footer.navigation.style,
    '& .footer-social-icon': {
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
  },
});


export function NonProfit() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`non-profit viewport-container ${classes.nonProfit}`}>
      <Switch>
        <Route exact path={NON_PROFIT_ROUTES.HOME} component={() => (
          <NonProfitHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={NON_PROFIT_ROUTES.DASHBOARD} component={() => (
          <NonProfitDashboard images={{ ...logos, ...dashboardImages }} />
        )} />
        <Route exact path={NON_PROFIT_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${NON_PROFIT_ROUTES.HOME}/*`} to={NON_PROFIT_ROUTES.HOME} />
      </Switch>
    </div>
  )
}