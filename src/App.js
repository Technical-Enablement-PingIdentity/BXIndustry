import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {
  Government, Manufacturing, Education, Pharmacy, Airlines, Hotels, RealEstate,
  FoodService, Insurance, Dashboard, NonProfit, Finance, Retail, Health, Sports,
  Company
} from '@Pages';
import {
  GOVERNMENT_URL, MANUFACTURING_URL, EDUCATION_URL, PHARMACY_URL, AIRLINES_URL,
  VERTICAL_ROUTES, HOTELS_URL, REAL_ESTATE_URL, FOOD_SERVICE_URL, INSURANCE_URL,
  DASHBOARD_URL, NON_PROFIT_URL, FINANCE_URL, RETAIL_URL, HEALTH_URL, SPORTS_URL,
  COMPANY_URL
} from '@Constants';
import { SettingsIcon } from '@Components/icons'
import { findInArrayBy, initGA, gaPageView } from '@Helpers';
import '@Styles/index.scss';

function App() {
  const activeVertical = React.useMemo(() => {
    return findInArrayBy(VERTICAL_ROUTES, process.env.REACT_APP_ACTIVE_VERTICAL || 'manufacturing', 'name')
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Route path='/' render={() => {
          initGA();
          gaPageView();
        }} />
        <Switch>
          <Route path={DASHBOARD_URL} component={Dashboard} />
          <Route path={MANUFACTURING_URL} component={Manufacturing} />
          <Route path={GOVERNMENT_URL} component={Government} />
          <Route path={EDUCATION_URL} component={Education} />
          <Route path={PHARMACY_URL} component={Pharmacy} />
          <Route path={AIRLINES_URL} component={Airlines} />
          <Route path={HOTELS_URL} component={Hotels} />
          <Route path={REAL_ESTATE_URL} component={RealEstate} />
          <Route path={FOOD_SERVICE_URL} component={FoodService} />
          <Route path={INSURANCE_URL} component={Insurance} />
          <Route path={NON_PROFIT_URL} component={NonProfit} />
          <Route path={FINANCE_URL} component={Finance} />
          <Route path={RETAIL_URL} component={Retail} />
          <Route path={HEALTH_URL} component={Health} />
          <Route path={SPORTS_URL} component={Sports} />
          <Route path={COMPANY_URL} component={Company} />
          <Redirect from='*' to={activeVertical.url} />
          <Redirect exact from="/" to={activeVertical.url} />
        </Switch>
        <div className="app-settings-link-wrapper app__dashboard-link-wrapper">
          <Link to={DASHBOARD_URL} className="app-settings-link-wrapper__link">
            <SettingsIcon />
          </Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
