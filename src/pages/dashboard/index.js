import React from 'react';
import { Link } from "react-router-dom";
import { getImagePath } from '@Helpers';
//vertical routes
import { MANUFACTURING_ROUTES } from '@Pages/manufacturing/constants';
import { GOVERNMENT_ROUTES } from '@Pages/government/constants';
import { EDUCATION_ROUTES } from '@Pages/education/constants';
import { PHARMACY_ROUTES } from '@Pages/pharmacy/constants';
import { AIRLINES_ROUTES } from '@Pages/airlines/constants';
import { HOTELS_ROUTES } from '@Pages/hotels/constants';
import { REAL_ESTATE_ROUTES } from '@Pages/real_estate/constants';
import { FOOD_SERVICE_ROUTES } from '@Pages/food_service/constants';
import { INSURANCE_ROUTES } from '@Pages/insurance/constants';
import { NON_PROFIT_ROUTES } from '@Pages/non_profit/constants';
import { FINANCE_ROUTES } from '@Pages/finance/constants';
import { RETAIL_ROUTES } from '@Pages/retail/constants';
import { HEALTH_ROUTES } from '@Pages/health/constants';
import { SPORTS_ROUTES } from '@Pages/sports/constants';
//vertical settings.json files
import airlinesSettings from '@Pages/airlines/settings.json';
import educationSettings from '@Pages/education/settings.json';
import foodServiceSettings from '@Pages/food_service/settings.json';
import governmentSettings from '@Pages/government/settings.json';
import hotelsSettings from '@Pages/hotels/settings.json';
import insuranceSettings from '@Pages/insurance/settings.json';
import manufacturingSettings from '@Pages/manufacturing/settings.json';
import nonProfitSettings from '@Pages/non_profit/settings.json';
import pharmacySettings from '@Pages/pharmacy/settings.json';
import realEstateSettings from '@Pages/real_estate/settings.json';
import financeSettings from '@Pages/finance/settings.json';
import retailSettings from '@Pages/retail/settings.json';
import healthSettings from '@Pages/health/settings.json';
import sportsSettings from '@Pages/sports/settings.json';
import './scss/index.scss';

const VERTICAL_ROWS = [
  {
    name: 'BXAirlines',
    logo: getImagePath('airlines', airlinesSettings.common_images.dialog_logo),
    homePageUrl: AIRLINES_ROUTES.HOME,
    dashboardPageUrl: AIRLINES_ROUTES.DASHBOARD,
    dialogExamplesUrl: AIRLINES_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXEats',
    logo: getImagePath('food_service', foodServiceSettings.common_images.dialog_logo),
    homePageUrl: FOOD_SERVICE_ROUTES.HOME,
    dashboardPageUrl: FOOD_SERVICE_ROUTES.DASHBOARD,
    dialogExamplesUrl: FOOD_SERVICE_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXEducation',
    logo: getImagePath('education', educationSettings.common_images.dialog_logo),
    homePageUrl: EDUCATION_ROUTES.HOME,
    dashboardPageUrl: EDUCATION_ROUTES.DASHBOARD,
    dialogExamplesUrl: EDUCATION_ROUTES.DIALOG_EXAMPLES
  },
  {
    Name: 'BXFinance',
    logo: getImagePath('finance', financeSettings.common_images.dialog_logo),
    homePageUrl: FINANCE_ROUTES.HOME,
    dashboardPageUrl: FINANCE_ROUTES.DASHBOARD,
    dialogExamplesUrl: FINANCE_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXGovernment',
    logo: getImagePath('government', governmentSettings.common_images.dialog_logo),
    homePageUrl: GOVERNMENT_ROUTES.HOME,
    dashboardPageUrl: GOVERNMENT_ROUTES.DASHBOARD,
    dialogExamplesUrl: GOVERNMENT_ROUTES.DIALOG_EXAMPLES
  },
  {
    Name: 'BXHealth',
    logo: getImagePath('health', healthSettings.common_images.dialog_logo),
    homePageUrl: HEALTH_ROUTES.HOME,
    dashboardPageUrl: HEALTH_ROUTES.DASHBOARD,
    dialogExamplesUrl: HEALTH_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXHotels',
    logo: getImagePath('hotels', hotelsSettings.common_images.dialog_logo),
    homePageUrl: HOTELS_ROUTES.HOME,
    dashboardPageUrl: HOTELS_ROUTES.DASHBOARD,
    dialogExamplesUrl: HOTELS_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXInsurance',
    logo: getImagePath('insurance', insuranceSettings.common_images.dialog_logo),
    homePageUrl: INSURANCE_ROUTES.HOME,
    dashboardPageUrl: INSURANCE_ROUTES.DASHBOARD,
    dialogExamplesUrl: INSURANCE_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXManufacturing',
    logo: getImagePath('manufacturing', manufacturingSettings.common_images.dialog_logo),
    homePageUrl: MANUFACTURING_ROUTES.HOME,
    dashboardPageUrl: MANUFACTURING_ROUTES.DASHBOARD,
    dialogExamplesUrl: MANUFACTURING_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXPharmacy',
    logo: getImagePath('pharmacy', pharmacySettings.common_images.dialog_logo),
    homePageUrl: PHARMACY_ROUTES.HOME,
    dashboardPageUrl: PHARMACY_ROUTES.DASHBOARD,
    dialogExamplesUrl: PHARMACY_ROUTES.DIALOG_EXAMPLES
  },
  {
    name: 'BXRealty',
    logo: getImagePath('real_estate', realEstateSettings.common_images.dialog_logo),
    homePageUrl: REAL_ESTATE_ROUTES.HOME,
    dashboardPageUrl: REAL_ESTATE_ROUTES.DASHBOARD,
    dialogExamplesUrl: REAL_ESTATE_ROUTES.DIALOG_EXAMPLES
  },
  {
    Name: 'BXRetail',
    logo: getImagePath('retail', retailSettings.common_images.dialog_logo_background),
    homePageUrl: RETAIL_ROUTES.HOME,
    dashboardPageUrl: RETAIL_ROUTES.DASHBOARD,
    dialogExamplesUrl: RETAIL_ROUTES.DIALOG_EXAMPLES
  },
  {
    Name: 'BXSports',
    logo: getImagePath('sports', sportsSettings.common_images.dialog_logo),
    homePageUrl: SPORTS_ROUTES.HOME,
    dashboardPageUrl: SPORTS_ROUTES.DASHBOARD,
    dialogExamplesUrl: SPORTS_ROUTES.DIALOG_EXAMPLES
  },
  {
    Name: 'BXVolunteer',
    logo: getImagePath('non_profit', nonProfitSettings.common_images.dialog_logo),
    homePageUrl: NON_PROFIT_ROUTES.HOME,
    dashboardPageUrl: NON_PROFIT_ROUTES.DASHBOARD,
    dialogExamplesUrl: NON_PROFIT_ROUTES.DIALOG_EXAMPLES
  },
]

export const Dashboard = () => {
  return (
    <div className="dashboard-main-section">
      <div className="container">
        <div className="container__col">
          <h1 className="dashboard-title">Verticals</h1>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Pages</th>
                </tr>
              </thead>
              <tbody>
                {VERTICAL_ROWS.map(({ name, logo, homePageUrl, dashboardPageUrl, dialogExamplesUrl }, index) => (
                  <tr key={index}>
                    <td>
                    {logo && <img src={logo} className="verticals-table-logo" alt="name" />}
                    {!logo && <h1>{name}</h1>}
                    </td>
                    <td className="table-actions-wrapper">
                      <div className="table-actions">
                        <Link to={homePageUrl} className="table-actions__item">Home page</Link>
                        <Link to={dashboardPageUrl} className="table-actions__item">Dashboard page</Link>
                        <Link to={dialogExamplesUrl} className="table-actions__item">Dialog Examples</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
