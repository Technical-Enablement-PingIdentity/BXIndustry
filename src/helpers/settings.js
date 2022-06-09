import { globalSettings } from '../global-settings';

/**
 * Checks settings for vertical and adds in global settings if present
 * @param {object} verticalDashboardSettings dashboard settings for the vertical that will be checked against globalSettings
 */
export function consolidateDashboardSettings(verticalDashboardSettings) {
    if (!verticalDashboardSettings.dv_widget && globalSettings.dashboard?.dv_widget) {
        verticalDashboardSettings.dv_widget = globalSettings.dashboard?.dv_widget;
    }
    
    if (!verticalDashboardSettings.dv_buttons && globalSettings.dashboard?.dv_buttons) {
        verticalDashboardSettings.dv_buttons = globalSettings.dashboard?.dv_buttons;
    }
}