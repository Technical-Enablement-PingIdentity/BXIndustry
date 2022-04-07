import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { BxfinanceHome } from './home';
import { BXFINANCE_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { BxfinanceAdmin } from './admin';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('bxfinance', image)
}

const faviconImages = {
  favicon: getImage(common_images.favicon),
  appleTouchIcon: getImage(common_images.apple_touch_icon),
}

const logos = {
  logo: getImage(common_images.logo),
  dialog_logo: getImage(common_images.dialog_logo),
}

const homePageImages = {
  banner: getImage(header.banner.image),
  rewards_card: getImage(header.banner.rewards_card.image),
}

const adminImages = {
  sidebar: admin.sidebar.items.map(({ image }) => {
    return getImage(image)
  }),
}


//json styles binding
const useStyles = makeStyles({
  bxfinance: {
    '& .header-wrapper': header.style,
    '& .header-nav__item, & .header-auth-actions__link': header.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .header-auth-actions__actions-wrapper': header.style,
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
    '& .header-wrapper .banner .rewards-card': header.banner.rewards_card.style,
    '& .alert-banner': home_page.alert_banner.style,
    '& .program-info-block__link': home_page.programs_section.links.style,
  },
});

export function Bxfinance() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...faviconImages,
    })
  }, [])

  return (
    <div className={`bxfinance viewport-container ${classes.bxfinance}`} >
      <Switch>
        <Route exact path={BXFINANCE_ROUTES.HOME} component={() => (
          <BxfinanceHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={BXFINANCE_ROUTES.ADMIN} component={() => (
          <BxfinanceAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={BXFINANCE_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${BXFINANCE_ROUTES.HOME}/*`} to={BXFINANCE_ROUTES.HOME} />
      </Switch>
    </div>
  )
}