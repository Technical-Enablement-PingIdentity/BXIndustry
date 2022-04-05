import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { PharmacyHome } from './home';
import { PHARMACY_ROUTES } from './constants';
import { PharmacyAdmin } from './admin';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, footer, button, home_page, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('pharmacy', image)
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
  info_section: home_page.info_section.map(({ image }) => {
    return getImage(image)
  })
}

const adminImages = {
  articles: admin.articles.map(({ image }) => {
    return getImage(image)
  }),
}

//json styles binding
const useStyles = makeStyles({
  pharmacy: {
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
    '& .button': {
      ...button.style,
      '&--outlined': {
        ...button.outlined_style,
        '& path': {
          fill: button.outlined_style.color
        },
        '&:hover': {
          ...button.outlined_style['&:hover'],
          '& path': {
            fill: button.outlined_style['&:hover'].color
          },
        }
      }
    },
    '& .banner__content': home_page.banner.backdrop.style,
    '& .dialog-social': {
      ...button.outlined_style,
      '& path': {
        fill: button.outlined_style.color
      },
      '&:hover': {
        ...button.outlined_style['&:hover'],
        '& path': {
          fill: button.outlined_style['&:hover'].color
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
    '& .copyright-content__text': {
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

export function Pharmacy() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`pharmacy viewport-container ${classes.pharmacy}`}>
      <Switch>
        <Route exact path={PHARMACY_ROUTES.HOME} component={() => (
          <PharmacyHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={PHARMACY_ROUTES.ADMIN} component={() => (
          <PharmacyAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={PHARMACY_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${PHARMACY_ROUTES.HOME}/*`} to={PHARMACY_ROUTES.HOME} />
      </Switch>
    </div>
  )
}