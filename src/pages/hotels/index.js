import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { HotelsHome } from './home';
import { HOTELS_ROUTES } from './constants';
import { HotelsAdmin } from './admin';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, admin, footer, button, common_images } = settings;

function getImage(image) {
  return getImagePath('hotels', image)
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
  offers: home_page.offers_section.items.map(({ image }) => {
    return getImage(image)
  })
}

const adminImages = {
  offer: getImage(admin.offer_section.image),
}

//json styles binding
const useStyles = makeStyles({
  hotels: {
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
    '& .banner-content': home_page.banner.style,
    '& .banner-content__title': home_page.banner.title.style,
    '& .banner-content__sub-title': home_page.banner.subtitle.style,
    '& .button, & .banner-form__button': {
      ...button.style,
      '&--outlined': button.outlined_style
    },
    '& .footer': footer.style,
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

export function Hotels() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`hotels viewport-container ${classes.hotels}`} >
      <Switch>
        <Route exact path={HOTELS_ROUTES.HOME} component={() => (
          <HotelsHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={HOTELS_ROUTES.ADMIN} component={() => (
          <HotelsAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={HOTELS_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${HOTELS_ROUTES.HOME}/*`} to={HOTELS_ROUTES.HOME} />
      </Switch>
    </div>
  )
}