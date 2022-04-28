import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { InsuranceHome } from './home';
import { InsuranceAdmin } from './admin';
import { INSURANCE_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('insurance', image)
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
  services: home_page.services.map(({ image }) => {
    return getImage(image)
  })
}

const adminImages = {
  dashboard: admin.dashboard.map(({ image }) => {
    return getImage(image)
  }),
  info: getImage(admin.info_block.image),
}

//json styles binding
const useStyles = makeStyles({
  insurance: {
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
    '& .banner-content__icon path': {
      fill: home_page.banner.icon.color
    },
    '& .banner-content__title': home_page.banner.title.style,
    '& .banner-content__description': home_page.banner.description.style,
    '& .admin-title-actions__btn': {
      ...admin.title_button.style,
      '& path': {
        fill: admin.title_button.style.color
      },
      '&:hover': {
        ...admin.title_button.style['&:hover'],
        '& path': {
          fill: admin.title_button.style['&:hover'].color,
        },
      }
    },
  },
});

export function Insurance() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`insurance viewport-container ${classes.insurance}`} >
      <Switch>
        <Route exact path={INSURANCE_ROUTES.HOME} component={() => (
          <InsuranceHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={INSURANCE_ROUTES.ADMIN} component={() => (
          <InsuranceAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={INSURANCE_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${INSURANCE_ROUTES.HOME}/*`} to={INSURANCE_ROUTES.HOME} />
      </Switch>
    </div>
  )
}