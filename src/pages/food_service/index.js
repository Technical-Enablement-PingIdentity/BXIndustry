import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { FoodServiceHome } from './home';
import { FOOD_SERVICE_ROUTES } from './constants';
import { FoodServiceAdmin } from './admin';
import { AuthDialogExamples } from '@Components';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, admin, footer, copyright, button, common_images } = settings;

function getImage(image) {
  return getImagePath('food_service', image)
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
  form: getImage(home_page.form_section.image),
  products: home_page.products_section.items.map(({ image }) => {
    return getImage(image)
  })
}

const adminImages = {
  products: admin.products_section.map(({ image }) => {
    return getImage(image)
  })
}

const useStyles = makeStyles({
  foodService: {
    '& .header-wrapper': header.style,
    '& .header-nav__item, & .header-auth-actions__link': header.links.style,
    '& .header-auth-actions__actions-wrapper': header.style,
    '& .hamburger-menu__line': {
      backgroundColor: header.links.style.color
    },
    '& .header-auth-actions__user-name': {
      color: header.links.style.color
    },
    '& .header-auth-actions__icon': {
      '& path': {
        fill: header.icon.style.color,
      },
      '&:hover': {
        '& path': {
          fill: header.icon.style['&:hover'].color
        }
      }
    },
    '& .header-auth-actions__button': header.button.style,
    '& .button, & .header-catalog-button,& .header-auth-actions__user-icon, & .product-footer-info__action': {
      ...button.style,
      '& .internal-hamburger-menu__line': {
        backgroundColor: button.style.color
      },
      '& path': {
        fill: button.style.color
      },
      '&:hover': {
        ...button.style['&:hover'],
        '& .internal-hamburger-menu__line': {
          backgroundColor: button.style['&:hover'].color
        },
        '& path': {
          fill: button.style['&:hover'].color
        },
      }
    },
    '& .order-form-section__bg': {
      backgroundColor: home_page.form_section.background_color
    },
    '& .footer': footer.style,
    '& .footer-menu__item': footer.navigation.style,
    '& .footer-contacts__button, & .footer-social-btn': {
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
    '& .copyright-content__text': copyright.info.style,
  },
});

export function FoodService() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`food-service viewport-container ${classes.foodService}`} >
      <Switch>
        <Route exact path={FOOD_SERVICE_ROUTES.HOME} component={() => (
          <FoodServiceHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={FOOD_SERVICE_ROUTES.ADMIN} component={() => (
          <FoodServiceAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={FOOD_SERVICE_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${FOOD_SERVICE_ROUTES.HOME}/*`} to={FOOD_SERVICE_ROUTES.HOME} />
      </Switch>
    </div>
  )
}