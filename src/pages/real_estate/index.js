import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { RealEstateHome } from './home';
import { REAL_ESTATE_ROUTES } from './constants';
import { RealEstateAdmin } from './admin';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, footer, button, home_page, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('real_estate', image)
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
  objects: home_page.objects_section.items.map(({ image }) => {
    return getImage(image)
  })
}

const adminImages = {
  objects: admin.objects_section.map(({ image }) => {
    return getImage(image)
  }),
  apartments: admin.apartments_section.items.map(({ image }) => {
    return getImage(image)
  }),
}

//json styles binding
const useStyles = makeStyles({
  realEstate: {
    '& .header-wrapper': header.style,
    '& .header-auth-actions__actions-wrapper': {
      '@media only screen and (max-width: 767px)': {
        ...admin.header.style
      }
    },
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .header-nav__item,& .header-auth-actions__link': header.links.style,
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
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
    '& .header-wrapper--admin': admin.header.style,
    '& .banner-content__title, & .banner-info-block__description': {
      color: home_page.banner.text_color
    },
    '& .banner-info-block__value': home_page.banner.banner_information.box_style,
    '& .header-auth-actions__user-icon': {
      ...header.icon_button.style,
      '& path': {
        fill: header.icon_button.style.color
      }
    },
    '& .footer': footer.style,
    '& .copyright-content__text, & .footer-info-block__title': {
      color: footer.text_color
    },
    '& .footer-menu__item': footer.navigation.style,
    '& .footer-social-icon, .footer-info-block__button': {
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

export function RealEstate() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, []);

  return (
    <div className={`real-estate viewport-container ${classes.realEstate}`}>
      <Switch>
        <Route exact path={REAL_ESTATE_ROUTES.HOME} component={() => (
          <RealEstateHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={REAL_ESTATE_ROUTES.ADMIN} component={() => (
          <RealEstateAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={REAL_ESTATE_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${REAL_ESTATE_ROUTES.HOME}/*`} to={REAL_ESTATE_ROUTES.HOME} />
      </Switch>
    </div>
  )
}