import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { EducationHome } from './home';
import { EDUCATION_ROUTES } from './constants';
import { AuthDialogExamples } from '@Components';
import { EducationAdmin } from './admin';
import { setHeadData, getImagePath } from '@Helpers';
import settings from './settings.json';
import './scss/index.scss';

const { title, header, home_page, footer, button, admin, common_images } = settings;

function getImage(image) {
  return getImagePath('education', image)
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
  programs: home_page.programs_section.items.map(({ image }) => {
    return getImage(image)
  })
}

const adminImages = {
  sidebar: admin.sidebar.items.map(({ image }) => {
    return getImage(image)
  }),
}


//json styles binding
const useStyles = makeStyles({
  education: {
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
    '& .banner': home_page.banner.style,
    '& .banner-info__title, & .banner-info__description': {
      color: home_page.banner.text_color
    },
    '& .banner-image__circle--first': {
      backgroundColor: home_page.banner.circle_color_1
    },
    '& .banner-image__circle--second': {
      borderColor: home_page.banner.circle_color_1
    },
    '& .banner-image__circle--third': {
      backgroundColor: home_page.banner.circle_color_2
    },
    '& .banner-content__circle': {
      backgroundColor: home_page.banner.circle_color_2
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
    '& .header-nav--admin .header-nav__item': admin.navigation.links.style
  },
});

export function Education() {

  const classes = useStyles();

  React.useEffect(() => {
    setHeadData({
      title,
      ...favoconsImages,
    })
  }, [])

  return (
    <div className={`education viewport-container ${classes.education}`} >
      <Switch>
        <Route exact path={EDUCATION_ROUTES.HOME} component={() => (
          <EducationHome images={{ ...logos, ...homePageImages }} />
        )} />
        <Route exact path={EDUCATION_ROUTES.ADMIN} component={() => (
          <EducationAdmin images={{ ...logos, ...adminImages }} />
        )} />
        <Route exact path={EDUCATION_ROUTES.DIALOG_EXAMPLES} component={() => (
          <AuthDialogExamples logo={logos.dialog_logo} />
        )} />
        <Redirect from={`${EDUCATION_ROUTES.HOME}/*`} to={EDUCATION_ROUTES.HOME} />
      </Switch>
    </div>
  )
}