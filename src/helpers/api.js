/**
 * Helper generates DV url for getting SDK token 
 * @param {Object} obj with company_key propery, if it doesn't exist, .env variable will be provided
 * @returns {String} api url 
 */

export function getApiUrl({ company_key }) {
  return `${process.env.REACT_APP_API_URL}/v1/company/${company_key || process.env.REACT_APP_COMPANY_KEY}/sdkToken`;
}
