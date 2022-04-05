import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { ManufacturingHome } from './home';
import { ManufacturingAdmin } from './admin';
import { MANUFACTURING_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, copyright, button, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('manufacturing', image)
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

const adminImages = {
  services: admin.services.map(({ image }) => {
    return getImage(image)
  }),
}

//json styles binding
const useStyles = makeStyles({
  manufacturing: {
    '& .header-wrapper, & .admin-header-wrapper': header.style,
    '& .header-auth-actions__actions-wrapper': header.style,
    '& .header-auth-actions__info': {
      color: header.links_style.color,
      '&--action': header.links_style
    },
    '& .admin-header-nav__item': header.links_style,
    '& .hamburger-menu__line': {
      backgroundColor: header.links_style.color
    },
    '& .header-auth-actions__separator': {
      backgroundColor: header.separator_color
    },
    '& .header-auth-actions__user-icon path': {
      fill: header.links_style.color
    },
    '& .navigation-item-link,& .navigation-item-link__icon': {
      ...home_page.header.navigation.links.style,
      '& path': {
        fill: home_page.header.navigation.links.style.color,

      }
    },
    '& .navigation-wrapper': home_page.header.navigation.style,
    '& .button': {
      ...button.style,
      '&--secondary': button.secondary_style,
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
    '& .banner-content__title': home_page.banner.title.style,
    '& .banner-content__description': home_page.banner.description.style,
    '& .service-block': home_page.services.services_blocks.styles.wrapper,
    '& .service-block__title': home_page.services.services_blocks.styles.title,
    '& .service-block__description': home_page.services.services_blocks.styles.description,
    '& .service-block__button': home_page.services.services_blocks.styles.button,
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
        }
      }
    },
    '& .copyright-secton': copyright.style,
    '& .copyright-content__text': copyright.info.style,
    '& .manufacturing__admin': admin.style
  },
});

export function Manufacturing() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`manufacturing viewport-container ${classes.manufacturing}`}>
      <Switch>
        <Route exact path={MANUFACTURING_ROUTES.HOME} component={() => (
          <ManufacturingHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={MANUFACTURING_ROUTES.ADMIN} component={() => (
          <ManufacturingAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={MANUFACTURING_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${MANUFACTURING_ROUTES.HOME}/*`} to={MANUFACTURING_ROUTES.HOME} />
      </Switch>
    </div>
  )
}