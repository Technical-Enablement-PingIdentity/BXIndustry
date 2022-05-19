# Introduction

BXIndustry (https://demo.bxindustry.org) is a unique demo in that it allows demo-ers to bootstrap DaVinci demonstrations! It allows demo-ers to tailor the skins to highlight a number of DaVinci flows that they have developed or will be developing. There are 10 different industry verticals which can be cloned and adapted on Glitch to tailor to your prospect or customer for a more personalized demo in the field. 
 
For this release, there are 12 verticals available in Glitch for you to remix:
1. [Hotel](https://demo.bxindustry.org/hotels)
2. [Airline](https://demo.bxindustry.org/airlines)
3. [Government](https://demo.bxindustry.org/government)
4. [Education](https://demo.bxindustry.org/education)
5. [Food Service](https://demo.bxindustry.org/food_service)
6. [Insurance](https://demo.bxindustry.org/insurance)
7. [Volunteer](https://demo.bxindustry.org/non_profit)
8. [Real Estate](https://demo.bxindustry.org/real_estate)
9. [Pharmacy](https://demo.bxindustry.org/pharmacy)
10. [Manufacturing](https://demo.bxindustry.org/manufacturing)
11. [Finance](https://demo.bxindustry.org/finance)
12. [Retail](https://demo.bxindustry.org/retail)
13. [Health](https://demo.bxindustry.org/health)
14. [Sports](https://demo.bxindustry.org/sports)

With BXIndustry, you can choose a vertical you would like to use, build your workflows and forms in DaVinci, and update the settings.json file to change text colors, text, images, configure buttons, and more! HTML templates are available for different modal forms for use in DaVinci (e.g., **src/components/AuthDialogExamples**).

# Getting Started


## Environment

To start with BXIndustry, you must have the following .env variables:

```sh
REACT_APP_API_KEY=
REACT_APP_API_URL=
REACT_APP_DV_JS_URL=
REACT_APP_COMPANY_KEY=
REACT_APP_LOGIN_POLICY_KEY=
REACT_APP_REGISTRATION_POLICY_KEY=
REACT_APP_ADMIN_POLICY_KEY=
REACT_APP_ACTIVE_VERTICAL=
REACT_APP_REMIX_POLICY_KEY=
```

**Note: changing environment variables will cause your project to restart, this may take up to 5 minutes!**

## Remixing

To remix BXIndustry, scroll to the bottom of the page on any vertical and click the **Remix on Glitch** button.
During the remixing process, you can modify all DaVinci API values or leave them as-is to use the default settings.

**Note: The default DaVinci values are for placeholder workflows. They are not wired up for real registration or sign on.**

The default vertical should be one value from the list:

- airlines
- education
- food_service
- government
- hotels
- insurance
- manufacturing
- non_profit
- pharmacy
- real_estate
- finance
- retail
- health
- sports

## An (IMPORTANT!!) Note on Versioning

We recommend making as many changes in DaVinci workflows as you can, and minimizing the coding (or none) you do in your Remixed BXIndustry or, for more flexibility, leverage [BXGeneric](https://demo.bxgeneric.org) as that also contains necessary code for the DaVinci widget.


## Another (IMPORTANT!!) Note on CSS

We recommend that you try to stick with the default templates provided in the dialog examples noted below when putting HTML
in DaVinci. It is not recommended to import CSS libraries or do other extensive styling in DaVinci because those
styles can bleed out of your flows to the entire BXIndustry site when a flow is loaded. 

If you must apply custom styles please
try to scope them via specific IDs (`#element-id {...}`) or classes (`.element-class {...}`) to prevent your styles from affecting your site.

Note: the bootstrap grid/layout system are available to use in DaVinci flows. See the [Bootstrap Documentation](https://getbootstrap.com/docs/5.1/layout/grid/) for more information.

## Switching the Verticals

Use the gear icon in the bottom right corner to open the “shortcut” page for all the verticals.

## HTML Templates for DaVinci

HTML templates are available for different modal forms (e.g., src/components/AuthDialogExamples).

To see the preview, add  **/dialog_examples** to the vertical url.
For example:
- [/manufacturing/dialog_examples][BXMde]
- [/airlines/dialog_examples][BXAde]
- ...


## Vertical Settings

Each vertical has an independent **settings.json** file.
For example:
- src/pages/airlines/settings.json
- src/pages/education/settings.json
- ...

Settings files provide the ability to make quick changes for:
- vertical colors, text and images
- a list of auth buttons and DV flows for them ("dv_buttons")

```sh
  "dv_buttons": [
    {
      "text": "Log in",
      "policy_key": "",
      "company_key": "",
      "api_key": ""
    },
    {
      "text": "Sign up",
      "policy_key": "",
      "company_key": "",
      "api_key": ""
    }
  ]
```

Note: If `policy_key, company_key, api_key` are empty, appropriate values will be provided from the `.env` file.

`"title": "BXManufacturing"` - This is the project name which displays in the head of the page.

## Images

You can add pictures in two ways:
- CDN URL
- file name (extension included) - will be delivered from internal **img** folder

The `common_images` section includes basic pictures for the specific vertical (favicon and logo).

```sh
  "common_images": {
    "favicon": "favicon.ico",
    "apple_touch_icon": "apple-touch-icon.png",
    "logo": "logo.png",
    "dialog_logo": "auth-dialog-logo.png"
  },
```

## Admin Page

To enable the Admin DV flow, the **global-settings.json** or **settings.json** (per vertical) file should have the following section. **NOTE** that there already exists an admin section, you just need to add the dv_widget property below:

```sh
{
  "admin": {
    "dv_widget": {
      "policy_key": "",
      "company_key": "",
      "api_key": ""
    }
  }
}
```

Note: If `policy_key, company_key, api_key` are empty, appropriate values will be provided from the `.env` file.

Similarly, dv_buttons are available on the admin page as well, it takes in an optional array of button configurations just like the home page for each vertical

```sh
{
  "admin": {
    "dv_buttons": [
      {
        "text": "",
        "policy_key": "",
        "company_key": "",
        "api_key": ""
      },
      {
        "text": "",
        "policy_key": "",
        "company_key": "",
        "api_key": ""
      }
    ],
  }
}
```

The Admin section in the file includes the `"user_name"` key, which will be displayed in the admin page header.

You can also enable your admin flow for all verticals by uncommenting the admin portion of globalSettings in src/global-settings.js. Make sure to set a value for REACT_APP_ADMIN_POLICY_KEY in .env if you do that as well!

## DV Dialogs HTML Structure for Inheriting the Main Style of the Site
To visit the dialog examples page:
- enter https://demo.bxindustry.org/admin
- click on "Dialog Examples" link

Click on the "Dialog Elements" button to preview all the elements below:
```html
<!-- dialog header -->
<div class="dialog-content-header dialog-content__header">
  <h6 class="dialog-content-header__title">Dialog Header</h6>
</div>

<div class="dialog-container">
  <div class="dialog-form">

<!-- wide input -->
    <div class="form-group dialog-form__form-group">
      <label class="form-group__label">Input label</label>
      <input class="form-group__input"/>
      <p class="form-group__hint dialog-link">color marked bottom label</p>
    </div>

<!-- narrow input -->
    <div class="form-group dialog-form__form-group dialog-form__form-group--xs">
      <label class="form-group__label">Input label</label>
      <input class="form-group__input" type="text"/>
    </div>

<!-- text block -->
    <p class="dialog-form-message">
      Text - no bottom space
    </p>

<!-- wide select -->
    <div class="form-group dialog-form__form-group">
      <label class="form-group__label">Input label</label>
      <select class="form-group__input">
        <option>Option1</option>
        <option>Option2</option>
      </select>
    </div>

<!-- narrow select -->
    <div class="form-group dialog-form__form-group dialog-form__form-group--xs">
      <label class="form-group__label">Input label</label>
      <select class="form-group__input">
        <option>Option1</option>
        <option>Option2</option>
      </select>
    </div>

<!-- text block with bottom space -->
    <p class="dialog-form-message dialog-form-message--mb_5">
      Text line<br/>
      + bottom space
    </p>

<!-- block picker with svg icons -->
    <div class="auth-flow-picker dialog-form__flow-picker">
      <div class="auth-flow-item auth-flow-picker__item">
        <div class="auth-flow-item__side">
          <p class="auth-flow-item__title">Email me a one time passcode on:</p>
          <p class="auth-flow-item__info">iel***@bxindustry.com</p>
        </div>
        <div class="auth-flow-item__side">
          <svg fill="none" height="18" viewbox="0 0 22 18" width="22" xmlns="http://www.w3.org/2000/svg">
            <rect height="16" rx="1" stroke-width="2" stroke="#D6DDE9" width="20" x="1" y="1"/>
          </svg>
        </div>
      </div>
      <div class="auth-flow-item auth-flow-picker__item">
        <div class="auth-flow-item__side">
          <p class="auth-flow-item__title">Text me a one-time passcode on:</p>
          <p class="auth-flow-item__info">8***5678</p>
        </div>
        <div class="auth-flow-item__side">
          <svg fill="none" height="25" viewbox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10"/>
            <circle cx="10" cy="10" r="10" fill="red"/>
          </svg>
        </div>
      </div>
    </div>

<!-- submit button -->
    <button class="dialog-form__submit-button button button--md">Submit</button>

<!-- social icons login -->
    <div class="dialog-socials dialog-form__socials-block">
      <p class="dialog-socials__title">Or log in with:</p>
      <ul class="socials dialog-socials__socials-list">
        <li class="socials__item">
          <span class="icon-button icon-button--md icon-button--outlined dialog-social dialog-social--fb">
            <svg fill="none" height="21" viewbox="0 0 10 21" width="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.1913 21H6.3913V10.4087H9.31304L9.58696 6.84783H6.3913C6.3913 6.84783 6.3913 5.47826 6.3913 4.83913C6.3913 4.01739 6.57391 3.65217 7.39565 3.65217C8.03478 3.65217 9.67826 3.65217 9.67826 3.65217V0C9.67826 0 7.30435 0 6.75652 0C3.65217 0 2.1913 1.36957 2.1913 4.01739C2.1913 6.3 2.1913 6.84783 2.1913 6.84783H0V10.4087H2.1913V21Z" fill="#000"/>
            </svg>
          </span>
        </li>
        <li class="socials__item">
          <span class="icon-button icon-button--md icon-button--outlined dialog-social dialog-social--in">
            <svg fill="none" height="20" viewbox="0 0 19 20" width="19" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.30002 6.40002H0.400024V19.1H4.30002V6.40002Z" fill="#000"/>
              <path d="M2.3 4.7C3.6 4.7 4.6 3.6 4.6 2.4C4.6 1.2 3.6 0 2.3 0C1 0 0 1.1 0 2.3C0 3.5 1 4.7 2.3 4.7Z" fill="#000"/>
              <path d="M10.6 12.4C10.6 10.6 11.4 9.50002 13 9.50002C14.4 9.50002 15.1 10.5 15.1 12.4C15.1 14.2 15.1 19.1 15.1 19.1H19C19 19.1 19 14.5 19 11C19 7.60002 17.1 5.90002 14.4 5.90002C11.7 5.90002 10.6 8.00002 10.6 8.00002V6.40002H6.79999V19.1H10.6C10.6 19.1 10.6 14.4 10.6 12.4Z" fill="#000"/>
            </svg>
          </span>
        </li>
        <li class="socials__item">
          <span class="icon-button icon-button--md icon-button--outlined dialog-social dialog-social--apple">
            <svg fill="none" height="20" viewbox="0 0 18 20" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2118 19.1946C13.1143 20.2474 11.9033 20.0833 10.7491 19.5869C9.52201 19.0805 8.40019 19.0485 7.10423 19.5869C5.49035 20.2754 4.6338 20.0753 3.66183 19.1946C-1.82577 13.6104 -1.01579 5.10388 5.22103 4.78364C6.73366 4.8637 7.79271 5.61027 8.68368 5.67232C10.008 5.40611 11.2756 4.64353 12.6931 4.74361C14.3961 4.87971 15.6697 5.54422 16.5202 6.73913C13.0171 8.82071 13.8473 13.3842 17.0649 14.6652C16.421 16.3364 15.5948 17.9877 14.2098 19.2086L14.2118 19.1946ZM8.56219 4.72359C8.39817 2.24171 10.4332 0.200152 12.7741 0C13.096 2.86218 10.1416 5.00381 8.56219 4.72359Z" fill="#000"/>
            </svg>
          </span>
        </li>
      </ul>
    </div>

<!-- footer message -->
    <div class="dialog-form__footer">
      <p class="dialog-footer-description">
        Footer message
        <span class="dialog-footer-description__link">
          Footer link
        </span>
      </p>
    </div>
  </div>
</div>
```

[BXMde]: <https://bxindustry-v1.glitch.me/manufacturing/dialog_examples>
[BXAde]: <https://bxindustry-v1.glitch.me/airlines/dialog_examples>

## Loading Remix Outside of Glitch
For faster initialization of your BXIndustry remix and easier development, you can clone your Glitch repo to your device and run it from there.
In order to do this, you must have Git and Node.js(<=v14)/npm installed on your laptop and should have a code editor such as Visual Studio Code.

[Follow this article](https://glitch.happyfox.com/kb/article/85-how-do-i-push-code-that-i-created-locally-to-my-project-on-glitch/) to get your repo locally. This will also set up your Glitch project to accept commits from other sources and you may reference it when you're ready to push changes to Glitch from your local environment. Please note that pushing to Glitch can be finicky sometimes, `git push` may take some time to complete.

Once you have downloaded the repo, create a file called `.env` in the root of the repo and copy the contents of the same file from the Glitch interface into that new file.

Then, run the following commands in a terminal/CMD from the root of your project:
1. `npm install --global yarn`
2. `yarn install`
3. `npm run start`
4. You should now get a browser window that shows your remix